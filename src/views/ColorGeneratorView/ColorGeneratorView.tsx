import { FiltersBar, ResultsPanel } from '@/components';
import { useColorGeneratorViewController } from './ColorGeneratorView.controller';

export function ColorGeneratorView() {
  const { actions, data } = useColorGeneratorViewController();

  return (
    <>
      <FiltersBar onGenerate={actions.handleGenerate} onReset={actions.handleReset} />
      <ResultsPanel generationResult={data.generationResult} />
    </>
  );
}
