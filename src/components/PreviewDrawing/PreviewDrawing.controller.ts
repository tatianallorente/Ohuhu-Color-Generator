import { useMemo, useState } from 'react';
import type { OhuhuColor } from '@/types/ohuhu.types';
import { shuffle } from '@/utils/utils';

interface UsePreviewDrawingControllerOptions {
  colors: readonly OhuhuColor[];
}

export function usePreviewDrawingController({ colors }: UsePreviewDrawingControllerOptions) {
  const [previewColorCount, setPreviewColorCount] = useState<number | null>(null);

  const zoneColors = useMemo(() => shuffle(colors).map((color) => color.hex), [colors]);

  const handleShowDrawing = () => {
    setPreviewColorCount(colors.length);
  };

  return {
    actions: {
      handleShowDrawing,
    },
    data: {
      isDrawingVisible: previewColorCount === colors.length,
      zoneColors,
    },
  };
}
