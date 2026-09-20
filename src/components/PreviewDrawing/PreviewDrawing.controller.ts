import { useMemo } from 'react';
import type { OhuhuColor } from '@/types';
import { shuffle } from '@/utils';

interface UsePreviewDrawingControllerOptions {
  colors: readonly OhuhuColor[];
}

export function usePreviewDrawingController({ colors }: UsePreviewDrawingControllerOptions) {
  const zoneColors = useMemo(() => shuffle(colors).map((color) => color.hex), [colors]);

  return {
    actions: {},
    data: {
      zoneColors,
    },
  };
}
