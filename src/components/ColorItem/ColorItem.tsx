import type { OhuhuColor } from '@/types/ohuhu.types';

interface ColorItemProps {
  color: OhuhuColor;
}

export function ColorItem({ color }: ColorItemProps) {
  return (
    <article className="text-center">
      <div
        aria-label={`${color.name} color sample`}
        className="aspect-square rounded-2xl shadow-sm"
        role="img"
        style={{ backgroundColor: color.hex }}
      />
      <p className="mt-3 font-semibold text-slate-900">{color.code}</p>
      <p className="text-sm text-slate-600">{color.name}</p>
    </article>
  );
}
