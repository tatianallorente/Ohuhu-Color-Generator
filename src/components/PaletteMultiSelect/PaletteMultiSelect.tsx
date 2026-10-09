import { Checkbox, FormControl, ListItemText, MenuItem, Select } from '@mui/material';
import { Palette } from 'lucide-react';
import { ownedPaletteIds } from '@/data';
import type { OhuhuPalette } from '@/types';
import { FilterLabel } from '../FilterLabel/FilterLabel';

interface PaletteMultiSelectProps {
  onChange: (paletteIds: string[]) => void;
  paletteOptions: OhuhuPalette[];
  selectedPaletteIds: string[];
}

export function PaletteMultiSelect({ onChange, paletteOptions, selectedPaletteIds }: PaletteMultiSelectProps) {
  return (
    <FormControl fullWidth>
      <FilterLabel filterId="palette" icon={<Palette aria-hidden="true" className="size-4" />} label="Palettes" />
      <Select
        displayEmpty
        id="palette-select"
        labelId="palette-label"
        multiple
        onChange={(event) => {
          const value = event.target.value;
          onChange(typeof value === 'string' ? value.split(',') : value);
        }}
        renderValue={(selected) =>
          selected.length === 0 ? (
            <span className="text-neutral-400">No palettes selected</span>
          ) : (
            paletteOptions
              .filter((palette) => selected.includes(palette.id))
              .map((palette) => palette.name)
              .join(', ')
          )
        }
        value={selectedPaletteIds}
      >
        {paletteOptions.map((palette) => (
          <MenuItem key={palette.id} value={palette.id} disabled={!ownedPaletteIds.includes(palette.id)}>
            <Checkbox checked={selectedPaletteIds.includes(palette.id)} />
            <ListItemText primary={palette.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
