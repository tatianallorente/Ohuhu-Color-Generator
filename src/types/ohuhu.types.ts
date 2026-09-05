export type ColorGroup =
  | 'all'
  | 'gray'
  | 'green'
  | 'pink'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'blue'
  | 'purple'
  | 'brown';

export type SpecificColorGroup = Exclude<ColorGroup, 'all'>;

export interface OhuhuColor {
  code: string;
  name: string;
  hex: string;
  group?: SpecificColorGroup;
}

export interface OhuhuPalette {
  id: string;
  name: string;
  declaredColorCount: number;
  colors: OhuhuColor[];
}

export interface OhuhuSeries {
  id: string;
  name: string;
  palettes: OhuhuPalette[];
}

export interface OhuhuCatalog {
  series: OhuhuSeries[];
}
