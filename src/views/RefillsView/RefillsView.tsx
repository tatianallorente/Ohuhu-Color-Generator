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
    </>
  );
}
