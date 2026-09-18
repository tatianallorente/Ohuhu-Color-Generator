import type { OhuhuColor } from './ohuhu.types';
import type { ColorFamily } from '@/common/colorFamilies';

export interface GenerationFilters {
  families: ColorFamily[];
  paletteIds: string[];
  requestedColorCount: number;
}

export interface GenerationResult {
  availableColorCount: number;
  colors: OhuhuColor[];
  paletteName: string;
  requestedColorCount: number;
}
