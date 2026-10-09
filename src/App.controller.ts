import { useState } from 'react';
import type { AppView } from '@/common';

export function useAppController() {
  const [activeView, setActiveView] = useState<AppView>('generator');

  const handleViewChange = (view: AppView) => setActiveView(view);

  return {
    actions: {
      handleViewChange,
    },
    data: {
      activeView,
    },
  };
}
