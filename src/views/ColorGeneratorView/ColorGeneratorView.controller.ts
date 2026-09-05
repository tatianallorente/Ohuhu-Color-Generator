import type { GenerationFilters } from '@/types/generation.types';

export function useColorGeneratorViewController() {
  const handleGenerate = (_filters: GenerationFilters) => {
    // TODO: Generate colors and store the results for ResultsPanel.
    return;
  };

  return {
    actions: {
      handleGenerate,
    },
    data: {},
  };
}
