import type { SelectChangeEvent } from '@mui/material';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { GenerationResult } from '@/types/generation.types';

export const COLUMN_OPTIONS = [1, 2, 3, 4, 5, 6];

interface UseResultsPanelControllerOptions {
  generationResult: GenerationResult | null;
}

export function useResultsPanelController({ generationResult }: UseResultsPanelControllerOptions) {
  const [columns, setColumns] = useState(4);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const availableColorCount = generationResult?.availableColorCount ?? 0;
  const requestedColorCount = generationResult?.requestedColorCount ?? 0;

  const handleBackgroundChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDarkBackground(event.target.checked);
  };

  const handleColumnsChange = (event: SelectChangeEvent<number>) => {
    setColumns(Number(event.target.value));
  };

  return {
    actions: {
      handleBackgroundChange,
      handleColumnsChange,
    },
    data: {
      columns,
      generationResult,
      hasAvailableColors: availableColorCount > 0,
      hasInsufficientColors: availableColorCount < requestedColorCount,
      isDarkBackground,
    },
  };
}
