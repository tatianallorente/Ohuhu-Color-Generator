import type { ColorFamily } from '@/common/colorFamilies';
import type { ParsedOhuhuColorCode } from '@/types/ohuhu.types';

const OHUHU_CODE_PATTERN = /^(?<family>[A-Z]+)(?<value>\d{2,3})$/;

export function parseOhuhuColorCode(code: string): ParsedOhuhuColorCode | null {
  const match = OHUHU_CODE_PATTERN.exec(code.trim().toUpperCase());

  if (!match?.groups) {
    return null;
  }

  const { family, value } = match.groups;

  return {
    family,
    saturation: Number(value[0]),
    brightness: Number(value.slice(1)),
  };
}

export function getColorFamily(code: string): ColorFamily | null {
  const parsedCode = parseOhuhuColorCode(code);

  if (!parsedCode) {
    return null;
  }

  return parsedCode.family as ColorFamily;
}
