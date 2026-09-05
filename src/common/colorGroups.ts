import type { ColorGroup } from '@/types/ohuhu.types';

export const COLOR_GROUP_LABELS: Readonly<Record<ColorGroup, string>> = {
  all: 'All',
  gray: 'Grey',
  green: 'Green',
  pink: 'Pink',
  red: 'Red',
  yellow: 'Yellow',
  orange: 'Orange',
  blue: 'Blue',
  purple: 'Purple',
  brown: 'Brown',
};

export const COLOR_GROUP_OPTIONS = Object.keys(COLOR_GROUP_LABELS) as ColorGroup[];
