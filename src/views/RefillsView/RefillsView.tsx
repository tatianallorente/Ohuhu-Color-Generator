import { useRefillsViewController } from './RefillsView.controller';
import { RefillFilters } from './components';

export function RefillsView() {
  const { actions, data } = useRefillsViewController();

  return (
    <>
      <RefillFilters
        onSearchQueryChange={actions.handleSearchQueryChange}
        onSelectedPaletteIdsChange={actions.handleSelectedPaletteIdsChange}
        paletteOptions={data.paletteOptions}
        searchQuery={data.searchQuery}
        selectedPaletteIds={data.selectedPaletteIds}
      />
      <section
        aria-labelledby="refill-results-heading"
        className="mt-8 rounded-3xl border-[6px] border-indigo-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <h2>WIP: refill results</h2>
      </section>
    </>
  );
}
