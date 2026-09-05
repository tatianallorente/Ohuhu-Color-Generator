import { getColorGroup } from '@/utils/colorCode';
import type { ColorGroup, OhuhuColor } from '@/types/ohuhu.types';

export function filterColors(colors: readonly OhuhuColor[], group: ColorGroup): OhuhuColor[] {
  if (group === 'all') {
    return [...colors];
  }

  return colors.filter((color) => getColorGroup(color) === group);
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
