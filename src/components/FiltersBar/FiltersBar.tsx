import { Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from '@mui/material';
import { COLOR_FAMILY_LABELS, COLOR_FAMILY_OPTIONS } from '@/common';
import type { GenerationFilters } from '@/types';
import { COLOR_COUNT_OPTIONS, useFiltersBarController } from './FiltersBar.controller';

interface FiltersBarProps {
  onGenerate?: (filters: GenerationFilters) => void;
  onReset?: () => void;
}

const OWNED_PALETTE_IDS = ['coco-wyo', 'jade-summer'];

export function FiltersBar({ onGenerate, onReset }: FiltersBarProps) {
  const controller = useFiltersBarController({ onGenerate, onReset });
  const { actions, data } = controller;

  return (
    <section
      aria-label="Color generation filters"
      className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.1fr_1.3fr_0.8fr_auto] xl:items-end">
        <FormControl fullWidth>
          <InputLabel id="palette-label" shrink>
            Palette
          </InputLabel>
          <Select
            displayEmpty
            label="Palette"
            labelId="palette-label"
            multiple
            onChange={actions.handlePaletteChange}
            renderValue={(selected) =>
              selected.length === 0 ? (
                <span className="text-neutral-400">No palettes selected</span>
              ) : (
                data.paletteOptions
                  .filter((palette) => selected.includes(palette.id))
                  .map((palette) => palette.name)
                  .join(', ')
              )
            }
            value={data.selectedPaletteIds}
          >
            {data.paletteOptions.map((palette) => (
              <MenuItem key={palette.id} value={palette.id} disabled={!OWNED_PALETTE_IDS.includes(palette.id)}>
                <Checkbox checked={data.selectedPaletteIds.includes(palette.id)} />
                <ListItemText primary={palette.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="color-families-label" shrink>
            Color families
          </InputLabel>
          <Select
            displayEmpty
            label="Color families"
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
          <InputLabel id="color-count-label">Number of colors</InputLabel>
          <Select
            label="Number of colors"
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
          <Button className="min-h-14" onClick={actions.handleReset} size="large" variant="outlined">
            Reset
          </Button>
          <Button
            className="min-h-14 flex-1"
            onClick={actions.handleGenerate}
            size="large"
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
