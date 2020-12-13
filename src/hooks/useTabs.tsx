import { useState } from "react";

export const useTabs = (initialTab: number, allTabs: []) => {
  if (!allTabs || !Array.isArray(allTabs)) {
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};