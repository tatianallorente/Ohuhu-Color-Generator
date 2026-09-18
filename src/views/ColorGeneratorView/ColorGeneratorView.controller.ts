import { useState } from 'react';
import { palettes } from '@/data/palettes';
import type { GenerationFilters, GenerationResult } from '@/types/generation.types';
import { filterColorsByFamilies, isColorlessBlender, shuffle } from '@/utils/utils';

export function useColorGeneratorViewController() {
  const [generationResult, setGenerationResult] = useState<GenerationResult | null>(null);

  const handleGenerate = (filters: GenerationFilters) => {
    const selectedPalettes = palettes.series
      .flatMap((series) => series.palettes)
      .filter((palette) => filters.paletteIds.includes(palette.id));

    if (selectedPalettes.length === 0) {
      return;
    }

    const paletteColors = Array.from(
      new Map(
        selectedPalettes
          .flatMap((palette) => palette.colors)
          .filter((color) => !isColorlessBlender(color))
          .map((color) => [color.code, color])
      ).values()
    );

    const availableColors = filterColorsByFamilies(paletteColors, filters.families);
    const colors = shuffle(availableColors).slice(0, filters.requestedColorCount);

    setGenerationResult({
      availableColorCount: availableColors.length,
      colors,
      paletteName: selectedPalettes.map((palette) => palette.name).join(', '),
      requestedColorCount: filters.requestedColorCount,
    });
  };

  const handleReset = () => {
    setGenerationResult(null);
  };

  return {
    actions: {
      handleGenerate,
      handleReset,
    },
    data: {
      generationResult,
    },
  };
}
