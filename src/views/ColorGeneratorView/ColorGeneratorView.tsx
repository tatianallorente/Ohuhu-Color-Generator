import { FiltersBar, Header, ResultsPanel } from '@/components';
import { useColorGeneratorViewController } from './ColorGeneratorView.controller';

export function ColorGeneratorView() {
  const { actions, data } = useColorGeneratorViewController();

  return (
    <main className="min-h-screen bg-linear-to-br from-sky-100 via-indigo-100 to-violet-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Header />

        <FiltersBar onGenerate={actions.handleGenerate} />
        <ResultsPanel generationResult={data.generationResult} />
      </div>
    </main>
  );
}
