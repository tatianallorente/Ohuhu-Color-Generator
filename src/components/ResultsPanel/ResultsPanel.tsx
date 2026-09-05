import {
  Alert,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import clsx from 'clsx';
import { ColorItem } from '@/components/ColorItem/ColorItem';
import type { GenerationResult } from '@/types/generation.types';
import { COLUMN_OPTIONS, useResultsPanelController } from './ResultsPanel.controller';
import { RESULTS_PANEL_THEMES } from './ResultsPanel.theme';

interface ResultsPanelProps {
  generationResult: GenerationResult | null;
}

export function ResultsPanel({ generationResult }: ResultsPanelProps) {
  const { actions, data } = useResultsPanelController({ generationResult });

  return (
    <ThemeProvider theme={data.isDarkBackground ? RESULTS_PANEL_THEMES.dark : RESULTS_PANEL_THEMES.light}>
      <section
        className={clsx(
          'mt-8 rounded-3xl border-[6px] p-6 shadow-sm transition-colors sm:p-8',
          data.isDarkBackground
            ? 'border-slate-700 bg-black text-slate-100'
            : 'border-slate-200 bg-white text-slate-900'
        )}
      >
        <div className="flex flex-wrap items-center justify-end gap-4">
          <FormControlLabel
            label="Dark background"
            control={
              <Switch checked={data.isDarkBackground} color="secondary" onChange={actions.handleBackgroundChange} />
            }
          />

          <FormControl size="small">
            <InputLabel id="columns-label">Columns</InputLabel>
            <Select label="Columns" labelId="columns-label" onChange={actions.handleColumnsChange} value={data.columns}>
              {COLUMN_OPTIONS.map((columnCount) => (
                <MenuItem key={columnCount} value={columnCount}>
                  {columnCount}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <Divider sx={{ my: 3 }} />

        {!data.generationResult && (
          <Typography align="center" className="py-6" color="text.secondary">
            Choose your filters and select "Generate colors" to see a combination.
          </Typography>
        )}

        {data.generationResult && data.hasInsufficientColors && (
          <Alert severity="warning">
            {data.hasAvailableColors
              ? `You requested ${data.generationResult.requestedColorCount} ${data.colorGroupLabel} colors, but ${data.generationResult.paletteName} only contains ${data.generationResult.availableColorCount}. Showing all available colors.`
              : `${data.generationResult.paletteName} does not contain any ${data.colorGroupLabel} colors.`}
          </Alert>
        )}

        {data.generationResult && data.hasAvailableColors && (
          <div className="mt-6 grid gap-5" style={{ gridTemplateColumns: `repeat(${data.columns}, minmax(0, 1fr))` }}>
            {data.generationResult.colors.map((color) => (
              <ColorItem key={color.code} color={color} isDarkBackground={data.isDarkBackground} />
            ))}
          </div>
        )}
      </section>
    </ThemeProvider>
  );
}
