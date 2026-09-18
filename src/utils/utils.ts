import type { ColorFamily } from '@/common/colorFamilies';
import type { OhuhuColor } from '@/types/ohuhu.types';
import { getColorFamily } from './colorCode';

export function isColorlessBlender(color: OhuhuColor): boolean {
  return color.code === '0' || /colorless blender/i.test(color.name);
}

export function shuffle<T>(items: readonly T[]): T[] {
  const shuffledItems = [...items];

  for (let currentIndex = shuffledItems.length - 1; currentIndex > 0; currentIndex -= 1) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [shuffledItems[currentIndex], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[currentIndex],
    ];
  }

  return shuffledItems;
}

export function filterColorsByFamilies(colors: readonly OhuhuColor[], families: readonly ColorFamily[]): OhuhuColor[] {
  if (families.length === 0) {
    return [...colors];
  }

  return colors.filter((color) => {
    const family = getColorFamily(color.code);
    return family !== null && families.includes(family);
  });
}
