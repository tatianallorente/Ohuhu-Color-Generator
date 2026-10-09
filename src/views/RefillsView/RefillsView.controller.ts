import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { ownedPaletteIds, palettes } from '@/data';

const paletteOptions = palettes.series.flatMap((series) => series.palettes);

export function useRefillsViewController() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPaletteIds, setSelectedPaletteIds] = useState([ownedPaletteIds[0]]);

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setSearchQuery(event.target.value);

  const handleSelectedPaletteIdsChange = (paletteIds: string[]) => setSelectedPaletteIds(paletteIds);

  return {
    actions: {
      handleSearchQueryChange,
      handleSelectedPaletteIdsChange,
    },
    data: {
      paletteOptions,
      searchQuery,
      selectedPaletteIds,
    },
  };
}
