import clsx from 'clsx';
import type { OhuhuColor } from '@/types/ohuhu.types';

interface ColorItemProps {
  color: OhuhuColor;
  isDarkBackground: boolean;
}

export function ColorItem({ color, isDarkBackground }: ColorItemProps) {
  return (
    <article className="text-center">
      <div
        aria-label={`${color.name} color sample`}
        className="aspect-square rounded-2xl shadow-sm"
        role="img"
        style={{ backgroundColor: color.hex }}
      />
      <p className={clsx('mt-3 font-semibold', isDarkBackground ? 'text-slate-100' : 'text-slate-900')}>{color.code}</p>
      <p className={clsx('text-sm', isDarkBackground ? 'text-slate-300' : 'text-slate-600')}>{color.name}</p>
    </article>
  );
}
