import { useState } from 'react';
import { palettes } from '@/data/palettes';
import type { GenerationFilters, GenerationResult } from '@/types/generation.types';
import { filterColors, shuffle } from '@/utils/utils';

export function useColorGeneratorViewController() {
  const [generationResult, setGenerationResult] = useState<GenerationResult | null>(null);

  const handleGenerate = (filters: GenerationFilters) => {
    const selectedPalette = palettes.series
      .flatMap((series) => series.palettes)
      .find((palette) => palette.id === filters.paletteId);

    if (!selectedPalette) {
      return;
    }

    const availableColors = filterColors(selectedPalette.colors, filters.colorGroup);
    const colors = shuffle(availableColors).slice(0, filters.requestedColorCount);

    setGenerationResult({
      availableColorCount: availableColors.length,
      colorGroup: filters.colorGroup,
      colors,
      paletteName: selectedPalette.name,
      requestedColorCount: filters.requestedColorCount,
    });
  };

  return {
    actions: {
      handleGenerate,
    },
    data: {
      generationResult,
    },
  };
}
