import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { COLOR_GROUP_LABELS, COLOR_GROUP_OPTIONS } from '@/common/colorGroups';
import type { GenerationFilters } from '@/types/generation.types';
import { COLOR_COUNT_OPTIONS, useFiltersBarController } from './FiltersBar.controller';

interface FiltersBarProps {
  onGenerate?: (filters: GenerationFilters) => void;
}

export function FiltersBar({ onGenerate }: FiltersBarProps) {
  const controller = useFiltersBarController({ onGenerate });
  const { actions, data } = controller;

  return (
    <section
      aria-label="Color generation filters"
      className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.1fr_1.1fr_1fr_0.8fr_auto] xl:items-end">
        <FormControl disabled fullWidth>
          <InputLabel id="series-label">Series</InputLabel>
          <Select label="Series" labelId="series-label" value={data.seriesName}>
            <MenuItem value={data.seriesName}>{data.seriesName}</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="palette-label">Palette</InputLabel>
          <Select
            label="Palette"
            labelId="palette-label"
            onChange={actions.handlePaletteChange}
            value={data.selectedPaletteId}
          >
            {data.paletteOptions.map((palette) => (
              <MenuItem key={palette.id} value={palette.id}>
                {palette.name} ({palette.declaredColorCount})
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="color-group-label">Color group</InputLabel>
          <Select
            label="Color group"
            labelId="color-group-label"
            onChange={actions.handleColorGroupChange}
            value={data.selectedColorGroup}
          >
            {COLOR_GROUP_OPTIONS.map((group) => (
              <MenuItem key={group} value={group}>
                {COLOR_GROUP_LABELS[group]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Autocomplete
          freeSolo
          onChange={actions.handleColorCountChange}
          onInputChange={actions.handleColorCountInputChange}
          options={COLOR_COUNT_OPTIONS}
          renderInput={(params) => (
            <TextField
              {...params}
              error={!data.hasValidRequestedColorCount}
              helperText={data.hasValidRequestedColorCount ? undefined : 'Enter a positive whole number.'}
              label="Number of colors"
            />
          )}
          value={data.requestedColorCount}
        />

        <Button
          className="min-h-14"
          disabled={!data.hasValidRequestedColorCount}
          onClick={actions.handleGenerate}
          size="large"
          variant="contained"
        >
          Generate colors
        </Button>
      </div>
    </section>
  );
}
