export interface OhuhuColor {
  code: string;
  name: string;
  hex: string;
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

export interface ParsedOhuhuColorCode {
  family: string;
  saturation: number;
  brightness: number;
}
