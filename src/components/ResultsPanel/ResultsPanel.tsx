import { Alert } from '@mui/material';
import { COLOR_GROUP_LABELS } from '@/common/colorGroups';
import { ColorItem } from '@/components/ColorItem/ColorItem';
import type { GenerationResult } from '@/types/generation.types';

interface ResultsPanelProps {
  generationResult: GenerationResult | null;
}

export function ResultsPanel({ generationResult }: ResultsPanelProps) {
  if (!generationResult) {
    return (
      <section className="mt-8 rounded-3xl border-[6px] border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-slate-600">Choose your filters and select "Generate colors" to see a combination.</p>
      </section>
    );
  }

  const hasAvailableColors = generationResult.availableColorCount > 0;
  const hasInsufficientColors = generationResult.availableColorCount < generationResult.requestedColorCount;
  const colorDescription =
    generationResult.colorGroup === 'all'
      ? 'colors'
      : `${COLOR_GROUP_LABELS[generationResult.colorGroup].toLowerCase()} colors`;

  return (
    <section className="mt-8 rounded-3xl border-[6px] border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {hasInsufficientColors && (
        <Alert severity="warning">
          {hasAvailableColors
            ? `You requested ${generationResult.requestedColorCount} ${colorDescription}, but ${generationResult.paletteName} only contains ${generationResult.availableColorCount}. Showing all available colors.`
            : `${generationResult.paletteName} does not contain any ${colorDescription}.`}
        </Alert>
      )}

      {hasAvailableColors && (
        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {generationResult.colors.map((color) => (
            <ColorItem key={color.code} color={color} />
          ))}
        </div>
      )}
    </section>
  );
}
