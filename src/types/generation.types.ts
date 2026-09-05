import type { ColorGroup } from './ohuhu.types';
import type { OhuhuColor } from './ohuhu.types';

export interface GenerationFilters {
  paletteId: string;
  colorGroup: ColorGroup;
  requestedColorCount: number;
}

export interface GenerationResult {
  availableColorCount: number;
  colorGroup: ColorGroup;
  colors: OhuhuColor[];
  paletteName: string;
  requestedColorCount: number;
}
