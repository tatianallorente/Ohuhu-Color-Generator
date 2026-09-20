import type { SelectChangeEvent } from '@mui/material';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { GenerationResult } from '@/types';

export const COLUMN_OPTIONS = [1, 2, 3, 4, 5, 6];

interface UseResultsPanelControllerOptions {
  generationResult: GenerationResult | null;
}

export function useResultsPanelController({ generationResult }: UseResultsPanelControllerOptions) {
  const [columns, setColumns] = useState(4);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const availableColorCount = generationResult?.availableColorCount ?? 0;
  const requestedColorCount = generationResult?.requestedColorCount ?? 0;

  const handlePreviewVisibilityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsPreviewVisible(event.target.checked);
  };

  const handleBackgroundChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDarkBackground(event.target.checked);
  };

  const handleColumnsChange = (event: SelectChangeEvent<number>) => {
    setColumns(Number(event.target.value));
  };

  return {
    actions: {
      handlePreviewVisibilityChange,
      handleBackgroundChange,
      handleColumnsChange,
    },
    data: {
      columns,
      generationResult,
      hasAvailableColors: availableColorCount > 0,
      hasInsufficientColors: availableColorCount < requestedColorCount,
      isPreviewVisible,
      isDarkBackground,
    },
  };
}
