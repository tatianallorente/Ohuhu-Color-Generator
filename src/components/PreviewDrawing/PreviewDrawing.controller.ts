import { useMemo } from 'react';
import type { OhuhuColor } from '@/types/ohuhu.types';
import { shuffle } from '@/utils/utils';

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
