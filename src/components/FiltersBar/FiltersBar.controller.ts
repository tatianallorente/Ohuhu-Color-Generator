import type { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import type { ColorFamily } from '@/common';
import { ownedPaletteIds, palettes } from '@/data';
import type { GenerationFilters } from '@/types';

const paletteOptions = palettes.series.flatMap((series) => series.palettes);

export const COLOR_COUNT_OPTIONS = Array.from({ length: 9 }, (_, index) => index + 2);

interface UseFiltersBarControllerOptions {
  onGenerate?: (filters: GenerationFilters) => void;
  onReset?: () => void;
}

export function useFiltersBarController({ onGenerate, onReset }: UseFiltersBarControllerOptions) {
  const [selectedPaletteIds, setSelectedPaletteIds] = useState([ownedPaletteIds[0]]);
  const [selectedFamilies, setSelectedFamilies] = useState<ColorFamily[]>([]);
  const [requestedColorCount, setRequestedColorCount] = useState(4);

  const handlePaletteChange = (paletteIds: string[]) => setSelectedPaletteIds(paletteIds);

  const handleColorFamiliesChange = (event: SelectChangeEvent<ColorFamily[]>) => {
    const value = event.target.value;
    setSelectedFamilies(typeof value === 'string' ? (value.split(',') as ColorFamily[]) : value);
  };

  const handleColorCountChange = (event: SelectChangeEvent<number>) => {
    setRequestedColorCount(Number(event.target.value));
  };

  const handleGenerate = () => {
    onGenerate?.({
      families: selectedFamilies,
      paletteIds: selectedPaletteIds,
      requestedColorCount,
    });
  };

  const handleReset = () => {
    setSelectedPaletteIds([]);
    setSelectedFamilies([]);
    setRequestedColorCount(4);
    onReset?.();
  };

  return {
    actions: {
      handleColorFamiliesChange,
      handleColorCountChange,
      handleGenerate,
      handlePaletteChange,
      handleReset,
    },
    data: {
      hasSelectedPalettes: selectedPaletteIds.length > 0,
      paletteOptions,
      requestedColorCount,
      selectedFamilies,
      selectedPaletteIds,
    },
  };
}
