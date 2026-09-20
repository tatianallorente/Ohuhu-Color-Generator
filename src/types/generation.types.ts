import type { OhuhuColor } from './ohuhu.types';
import type { ColorFamily } from '@/common/colorFamilies';

export interface GeneratedColor extends OhuhuColor {
  availablePaletteNames: string[];
  isRefillAvailable: boolean;
  selectedPaletteNames: string[];
}

export interface GenerationFilters {
  families: ColorFamily[];
  paletteIds: string[];
  requestedColorCount: number;
}

export interface GenerationResult {
  availableColorCount: number;
  colors: GeneratedColor[];
  paletteName: string;
  requestedColorCount: number;
}
