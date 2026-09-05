import type { ColorGroup, OhuhuColor, ParsedOhuhuColorCode, SpecificColorGroup } from '@/types/ohuhu.types';

const OHUHU_CODE_PATTERN = /^(?<family>[A-Z]+)(?<value>\d{3})$/;

const COLOR_GROUP_BY_FAMILY: Readonly<Record<string, SpecificColorGroup>> = {
  B: 'blue',
  BG: 'blue',
  BR: 'brown',
  CG: 'gray',
  E: 'brown',
  G: 'green',
  PB: 'blue',
  R: 'red',
  RP: 'pink',
  RV: 'pink',
  V: 'purple',
  WG: 'gray',
  Y: 'yellow',
  YG: 'green',
  YR: 'orange',
};

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

export function getGroupFromOhuhuCode(code: string): SpecificColorGroup | null {
  const parsedCode = parseOhuhuColorCode(code);

  if (!parsedCode) {
    return null;
  }

  return COLOR_GROUP_BY_FAMILY[parsedCode.family] ?? null;
}

export function getColorGroup(color: OhuhuColor): ColorGroup | null {
  return color.group ?? getGroupFromOhuhuCode(color.code);
}
