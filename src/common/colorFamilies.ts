export const COLOR_FAMILY_LABELS = {
  B: 'Blue',
  BG: 'Blue Green',
  BGY: 'Blue Green Yellow',
  BV: 'Blue Violet',
  CG: 'Cool Grey',
  E: 'Earth',
  FY: 'Fluorescent Yellow',
  G: 'Green',
  GG: 'Green Grey',
  R: 'Red',
  RV: 'Red Violet',
  V: 'Violet',
  WG: 'Warm Grey',
  Y: 'Yellow',
  YG: 'Yellow Green',
  YGY: 'Yellow Green Yellow',
  YR: 'Yellow Red',
} as const;

export type ColorFamily = keyof typeof COLOR_FAMILY_LABELS;

export const COLOR_FAMILY_OPTIONS = Object.keys(COLOR_FAMILY_LABELS) as ColorFamily[];
