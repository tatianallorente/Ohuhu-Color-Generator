import { useState } from 'react';
import { COLOR_FAMILY_LABELS } from '@/common';
import type { GeneratedColor } from '@/types';
import { parseOhuhuColorCode } from '@/utils';

export function useColorItemController(color: GeneratedColor) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const parsedColorCode = parseOhuhuColorCode(color.code);
  const colorDetails = parsedColorCode
    ? {
        brightness: parsedColorCode.brightness,
        family: `${parsedColorCode.family} (${COLOR_FAMILY_LABELS[parsedColorCode.family as keyof typeof COLOR_FAMILY_LABELS] ?? parsedColorCode.family})`,
        saturation: parsedColorCode.saturation,
      }
    : null;

  const handleDetailsToggle = () => {
    setIsDetailsVisible((isVisible) => !isVisible);
  };

  return {
    actions: {
      handleDetailsToggle,
    },
    data: {
      colorDetails,
      isDetailsVisible,
    },
  };
}
