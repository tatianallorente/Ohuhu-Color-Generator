import { Chip } from '@mui/material';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import type { GeneratedColor } from '@/types';
import { useColorItemController } from './ColorItem.controller';

interface ColorItemProps {
  color: GeneratedColor;
  isDarkBackground: boolean;
}

export function ColorItem({ color, isDarkBackground }: ColorItemProps) {
  const { actions, data } = useColorItemController();

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
      <button
        aria-expanded={data.isDetailsVisible}
        className={clsx(
          'mt-3 flex w-full cursor-pointer items-center justify-between rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
          isDarkBackground
            ? 'border-slate-600 text-slate-200 hover:bg-slate-800'
            : 'border-slate-300 text-slate-700 hover:bg-slate-50'
        )}
        onClick={actions.handleDetailsToggle}
        type="button"
      >
        Details
        <ChevronDown
          aria-hidden="true"
          className={clsx('size-5 transition-transform', data.isDetailsVisible && 'rotate-180')}
          strokeWidth="2"
        />
      </button>

      {data.isDetailsVisible && (
        <div className={clsx('mt-3 text-sm', isDarkBackground ? 'text-slate-300' : 'text-slate-600')}>
          <p>
            Available in:{' '}
            {color.availablePaletteNames.map((paletteName, index) => (
              <span key={paletteName}>
                {color.selectedPaletteNames.includes(paletteName) ? <strong>{paletteName}</strong> : paletteName}
                {index < color.availablePaletteNames.length - 1 && ', '}
              </span>
            ))}
          </p>
          {color.isRefillAvailable && (
            <Chip className="mt-3" label="Refill available" size="small" variant="outlined" />
          )}
        </div>
      )}
    </article>
  );
}
