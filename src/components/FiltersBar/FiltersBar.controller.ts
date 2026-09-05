import type { SelectChangeEvent } from '@mui/material';
import { useState, type SyntheticEvent } from 'react';

import palettesData from '@/data/palettes.json';
import type { GenerationFilters } from '@/types/generation.types';
import type { ColorGroup, OhuhuCatalog } from '@/types/ohuhu.types';

const catalog = palettesData as unknown as OhuhuCatalog;
const selectedSeries = catalog.series[0];

export const COLOR_COUNT_OPTIONS = Array.from({ length: 12 }, (_, index) => String(index + 1));

interface UseFiltersBarControllerOptions {
  onGenerate?: (filters: GenerationFilters) => void;
}

export function useFiltersBarController({ onGenerate }: UseFiltersBarControllerOptions) {
  const [selectedPaletteId, setSelectedPaletteId] = useState(selectedSeries.palettes[0].id);
  const [selectedColorGroup, setSelectedColorGroup] = useState<ColorGroup>('all');
  const [requestedColorCount, setRequestedColorCount] = useState('4');

  const parsedRequestedColorCount = Number(requestedColorCount);
  const hasValidRequestedColorCount = Number.isInteger(parsedRequestedColorCount) && parsedRequestedColorCount > 0;

  const handlePaletteChange = (event: SelectChangeEvent<string>) => {
    setSelectedPaletteId(event.target.value);
  };

  const handleColorGroupChange = (event: SelectChangeEvent<ColorGroup>) => {
    setSelectedColorGroup(event.target.value as ColorGroup);
  };

  const handleColorCountChange = (_: SyntheticEvent, value: string | null) => {
    setRequestedColorCount(value ?? '');
  };

  const handleColorCountInputChange = (_: SyntheticEvent, value: string) => {
    setRequestedColorCount(value);
  };

  const handleGenerate = () => {
    if (!hasValidRequestedColorCount) {
      return;
    }

    onGenerate?.({
      paletteId: selectedPaletteId,
      colorGroup: selectedColorGroup,
      requestedColorCount: parsedRequestedColorCount,
    });
  };

  return {
    actions: {
      handleColorCountChange,
      handleColorCountInputChange,
      handleColorGroupChange,
      handleGenerate,
      handlePaletteChange,
    },
    data: {
      hasValidRequestedColorCount,
      paletteOptions: selectedSeries.palettes,
      requestedColorCount,
      selectedColorGroup,
      selectedPaletteId,
      seriesName: selectedSeries.name,
    },
  };
}
