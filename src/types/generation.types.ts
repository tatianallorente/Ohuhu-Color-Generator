import type { ColorGroup } from './ohuhu.types';

export interface GenerationFilters {
  paletteId: string;
  colorGroup: ColorGroup;
  requestedColorCount: number;
}
