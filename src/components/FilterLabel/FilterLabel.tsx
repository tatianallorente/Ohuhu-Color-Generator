import type { ReactNode } from 'react';

interface FilterLabelProps {
  filterId: string;
  icon: ReactNode;
  label: string;
}

export function FilterLabel({ filterId, icon, label }: FilterLabelProps) {
  return (
    <label
      className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-700"
      htmlFor={`${filterId}-select`}
      id={`${filterId}-label`}
    >
      <span className="text-secondary flex">{icon}</span>
      {label}
    </label>
  );
}
