import type { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import type { ColorFamily } from '@/common/colorFamilies';
import { palettes } from '@/data/palettes';
import type { GenerationFilters } from '@/types/generation.types';

const selectedSeries = palettes.series[0];

export const COLOR_COUNT_OPTIONS = Array.from({ length: 9 }, (_, index) => index + 2);

interface UseFiltersBarControllerOptions {
  onGenerate?: (filters: GenerationFilters) => void;
}

export function useFiltersBarController({ onGenerate }: UseFiltersBarControllerOptions) {
  const [selectedPaletteIds, setSelectedPaletteIds] = useState([selectedSeries.palettes[0].id]);
  const [selectedFamilies, setSelectedFamilies] = useState<ColorFamily[]>([]);
  const [requestedColorCount, setRequestedColorCount] = useState(4);

  const handlePaletteChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedPaletteIds(typeof value === 'string' ? value.split(',') : value);
  };

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

  return {
    actions: {
      handleColorFamiliesChange,
      handleColorCountChange,
      handleGenerate,
      handlePaletteChange,
    },
    data: {
      paletteOptions: selectedSeries.palettes,
      requestedColorCount,
      selectedFamilies,
      selectedPaletteIds,
    },
  };
}
