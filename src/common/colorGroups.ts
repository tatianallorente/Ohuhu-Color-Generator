import type { ColorGroup } from '@/types/ohuhu.types';

export const COLOR_GROUP_LABELS: Readonly<Record<ColorGroup, string>> = {
  all: 'All',
  gray: 'Greys',
  green: 'Greens',
  pink: 'Pinks',
  red: 'Reds',
  yellow: 'Yellows',
  orange: 'Oranges',
  blue: 'Blues',
  purple: 'Purples',
  brown: 'Browns',
};

export const COLOR_GROUP_OPTIONS = Object.keys(COLOR_GROUP_LABELS) as ColorGroup[];
