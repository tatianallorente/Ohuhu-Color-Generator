import type { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { palettes } from '@/data/palettes';
import type { GenerationFilters } from '@/types/generation.types';
import type { ColorGroup } from '@/types/ohuhu.types';

const selectedSeries = palettes.series[0];

export const COLOR_COUNT_OPTIONS = Array.from({ length: 9 }, (_, index) => index + 2);

interface UseFiltersBarControllerOptions {
  onGenerate?: (filters: GenerationFilters) => void;
}

export function useFiltersBarController({ onGenerate }: UseFiltersBarControllerOptions) {
  const [selectedPaletteId, setSelectedPaletteId] = useState(selectedSeries.palettes[0].id);
  const [selectedColorGroup, setSelectedColorGroup] = useState<ColorGroup>('all');
  const [requestedColorCount, setRequestedColorCount] = useState(4);

  const handlePaletteChange = (event: SelectChangeEvent<string>) => {
    setSelectedPaletteId(event.target.value);
  };

  const handleColorGroupChange = (event: SelectChangeEvent<ColorGroup>) => {
    setSelectedColorGroup(event.target.value as ColorGroup);
  };

  const handleColorCountChange = (event: SelectChangeEvent<number>) => {
    setRequestedColorCount(Number(event.target.value));
  };

  const handleGenerate = () => {
    onGenerate?.({
      paletteId: selectedPaletteId,
      colorGroup: selectedColorGroup,
      requestedColorCount,
    });
  };

  return {
    actions: {
      handleColorCountChange,
      handleColorGroupChange,
      handleGenerate,
      handlePaletteChange,
    },
    data: {
      paletteOptions: selectedSeries.palettes,
      requestedColorCount,
      selectedColorGroup,
      selectedPaletteId,
      seriesName: selectedSeries.name,
    },
  };
}
