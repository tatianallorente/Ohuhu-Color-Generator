import { TextField } from '@mui/material';
import { Search } from 'lucide-react';
import type { ChangeEvent } from 'react';
import { FilterLabel, PaletteMultiSelect } from '@/components';
import type { OhuhuPalette } from '@/types';

interface RefillFiltersProps {
  onSearchQueryChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectedPaletteIdsChange: (paletteIds: string[]) => void;
  paletteOptions: OhuhuPalette[];
  searchQuery: string;
  selectedPaletteIds: string[];
}

export function RefillFilters({
  onSearchQueryChange,
  onSelectedPaletteIdsChange,
  paletteOptions,
  searchQuery,
  selectedPaletteIds,
}: RefillFiltersProps) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <PaletteMultiSelect
          onChange={onSelectedPaletteIdsChange}
          paletteOptions={paletteOptions}
          selectedPaletteIds={selectedPaletteIds}
        />
        <div>
          <FilterLabel
            filterId="search"
            icon={<Search aria-hidden="true" className="size-4" />}
            label="Search all palettes"
          />
          <TextField
            fullWidth
            id="search-select"
            onChange={onSearchQueryChange}
            placeholder="Code or name, e.g. YG03 or yellow"
            type="search"
            value={searchQuery}
          />
        </div>
      </div>
    </div>
  );
}
