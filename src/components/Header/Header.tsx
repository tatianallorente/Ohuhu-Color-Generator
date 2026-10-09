import { Droplet, Palette } from 'lucide-react';
import type { AppView } from '@/common';

interface HeaderProps {
  activeView: AppView;
  onViewChange: (view: AppView) => void;
}

export function Header({ activeView, onViewChange }: HeaderProps) {
  return (
    <header className="mb-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {activeView === 'refills' ? 'Refill availability' : 'Ohuhu Color Generator'}
        </h1>
        <p className="mt-2 text-slate-600">
          {activeView === 'refills'
            ? 'Find refills for your collection or check any color in the catalog.'
            : 'Manage your Ohuhu Honolulu marker collection.'}
        </p>
      </div>
      <nav aria-label="Main navigation" className="mt-6 flex justify-center">
        <div className="inline-flex rounded-full border border-slate-200 bg-white/90 p-1 shadow-xs">
          <button
            aria-current={activeView === 'generator' ? 'page' : undefined}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 data-[active=true]:bg-blue-200 data-[active=true]:font-semibold data-[active=true]:text-blue-900 data-[active=true]:hover:bg-blue-200"
            data-active={activeView === 'generator'}
            onClick={() => onViewChange('generator')}
            type="button"
          >
            <Palette aria-hidden="true" className="size-4" />
            Generator
          </button>
          <button
            aria-current={activeView === 'refills' ? 'page' : undefined}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 data-[active=true]:bg-blue-200 data-[active=true]:font-semibold data-[active=true]:text-blue-900 data-[active=true]:hover:bg-blue-200"
            data-active={activeView === 'refills'}
            onClick={() => onViewChange('refills')}
            type="button"
          >
            <Droplet aria-hidden="true" className="size-4" />
            Refills
          </button>
        </div>
      </nav>
    </header>
  );
}
