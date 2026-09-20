import { Header } from '@/components';
import { ColorGeneratorView } from '@/views/ColorGeneratorView/ColorGeneratorView';

function App() {
  return (
    <main className="min-h-screen bg-linear-to-br from-sky-100 via-indigo-100 to-violet-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Header />
        <ColorGeneratorView />
      </div>
    </main>
  );
}

export default App;
