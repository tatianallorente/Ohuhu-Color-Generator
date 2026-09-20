import { useState } from 'react';

export function useColorItemController() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleDetailsToggle = () => {
    setIsDetailsVisible((isVisible) => !isVisible);
  };

  return {
    actions: {
      handleDetailsToggle,
    },
    data: {
      isDetailsVisible,
    },
  };
}
