import { useState } from 'react';
import { palettes, refillColorCodes } from '@/data';
import type { GeneratedColor, GenerationFilters, GenerationResult, OhuhuColor, OhuhuPalette } from '@/types';
import { filterColorsByFamilies, isColorlessBlender, shuffle } from '@/utils';

export function useColorGeneratorViewController() {
  const [generationResult, setGenerationResult] = useState<GenerationResult | null>(null);

  const getSelectedPalettes = (paletteIds: string[]) =>
    palettes.series
      .flatMap((series) => series.palettes)
      .filter((palette) => paletteIds.includes(palette.id));

  const getAvailableColors = (selectedPalettes: OhuhuPalette[], filters: GenerationFilters) => {
    const uniquePaletteColors = Array.from(
      new Map(
        selectedPalettes
          .flatMap((palette) => palette.colors)
          .filter((color) => !isColorlessBlender(color))
          .map((color) => [color.code, color])
      ).values()
    );

    return filterColorsByFamilies(uniquePaletteColors, filters.families);
  };

  const addColorDetails = (colors: OhuhuColor[], selectedPalettes: OhuhuPalette[]): GeneratedColor[] =>
    colors.map((color) => {
      const availablePalettes = palettes.series
        .flatMap((series) => series.palettes)
        .filter((palette) => palette.colors.some((paletteColor) => paletteColor.code === color.code));
      const selectedPaletteNames = selectedPalettes
        .filter((palette) => palette.colors.some((paletteColor) => paletteColor.code === color.code))
        .map((palette) => palette.name);
      const otherPaletteNames = availablePalettes
        .map((palette) => palette.name)
        .filter((paletteName) => !selectedPaletteNames.includes(paletteName));

      return {
        ...color,
        availablePaletteNames: [...selectedPaletteNames, ...otherPaletteNames],
        isRefillAvailable: refillColorCodes.has(color.code),
        selectedPaletteNames,
      };
    });

  const handleReset = () => {
    setGenerationResult(null);
  };

  const handleGenerate = (filters: GenerationFilters) => {
    const selectedPalettes = getSelectedPalettes(filters.paletteIds);

    if (selectedPalettes.length === 0) {
      return;
    }

    const availableColors = getAvailableColors(selectedPalettes, filters);
    const selectedColors = shuffle(availableColors).slice(0, filters.requestedColorCount);
    const colorsWithDetails = addColorDetails(selectedColors, selectedPalettes);

    setGenerationResult({
      availableColorCount: availableColors.length,
      colors: colorsWithDetails,
      paletteName: selectedPalettes.map((palette) => palette.name).join(', '),
      requestedColorCount: filters.requestedColorCount,
    });
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
