import { Button, Checkbox, FormControl, ListItemText, MenuItem, Select } from '@mui/material';
import { Hash, RotateCcw, Shuffle, SwatchBook } from 'lucide-react';
import { COLOR_FAMILY_LABELS, COLOR_FAMILY_OPTIONS } from '@/common';
import { FilterLabel, PaletteMultiSelect } from '@/components';
import type { GenerationFilters } from '@/types';
import { COLOR_COUNT_OPTIONS, useFiltersBarController } from './FiltersBar.controller';

interface FiltersBarProps {
  onGenerate?: (filters: GenerationFilters) => void;
  onReset?: () => void;
}

export function FiltersBar({ onGenerate, onReset }: FiltersBarProps) {
  const controller = useFiltersBarController({ onGenerate, onReset });
  const { actions, data } = controller;

  return (
    <section
      aria-label="Color generation filters"
      className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.1fr_1.3fr_0.8fr_auto] xl:items-end">
        <PaletteMultiSelect
          onChange={actions.handlePaletteChange}
          paletteOptions={data.paletteOptions}
          selectedPaletteIds={data.selectedPaletteIds}
        />

        <FormControl fullWidth>
          <FilterLabel
            filterId="color-families"
            icon={<SwatchBook aria-hidden="true" className="size-4" />}
            label="Color families"
          />
          <Select
            displayEmpty
            id="color-families-select"
            labelId="color-families-label"
            multiple
            onChange={actions.handleColorFamiliesChange}
            renderValue={(selected) =>
              selected.length === 0 ? (
                <span className="text-neutral-400">All families</span>
              ) : (
                selected.map((family) => `${family} (${COLOR_FAMILY_LABELS[family]})`).join(', ')
              )
            }
            value={data.selectedFamilies}
          >
            {COLOR_FAMILY_OPTIONS.map((family) => (
              <MenuItem key={family} value={family}>
                <Checkbox checked={data.selectedFamilies.includes(family)} />
                <ListItemText primary={`${family} (${COLOR_FAMILY_LABELS[family]})`} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <FilterLabel
            filterId="color-count"
            icon={<Hash aria-hidden="true" className="size-4" />}
            label="Number of colors"
          />
          <Select
            id="color-count-select"
            labelId="color-count-label"
            onChange={actions.handleColorCountChange}
            value={data.requestedColorCount}
          >
            {COLOR_COUNT_OPTIONS.map((colorCount) => (
              <MenuItem key={colorCount} value={colorCount}>
                {colorCount}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="flex gap-3">
          <Button
            className="min-h-14"
            onClick={actions.handleReset}
            size="large"
            startIcon={<RotateCcw aria-hidden="true" />}
            variant="outlined"
          >
            Reset
          </Button>
          <Button
            className="min-h-14 flex-1"
            onClick={actions.handleGenerate}
            size="large"
            startIcon={<Shuffle aria-hidden="true" />}
            variant="contained"
            disableElevation
            disabled={!data.hasSelectedPalettes}
          >
            Generate colors
          </Button>
        </div>
      </div>
    </section>
  );
}
