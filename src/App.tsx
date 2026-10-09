import { Header } from '@/components';
import { ColorGeneratorView } from '@/views/ColorGeneratorView/ColorGeneratorView';
import { RefillsView } from '@/views/RefillsView/RefillsView';
import { useAppController } from './App.controller';

function App() {
  const { actions, data } = useAppController();

  return (
    <main className="min-h-screen bg-linear-to-br from-sky-100 via-indigo-100 to-violet-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Header activeView={data.activeView} onViewChange={actions.handleViewChange} />
        {data.activeView === 'generator' ? <ColorGeneratorView /> : <RefillsView />}
      </div>
    </main>
  );
}

export default App;
