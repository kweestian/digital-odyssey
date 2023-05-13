import { useState, useEffect } from 'react';

const useRegionContext = (key: RegionKey | undefined) => {
  const [currentRegion, setCurrentRegion] = useState<{ title?: string; color?: string }>({});

  useEffect(() => {
    const loadCustomMap = async () => {
      const { CustomMap } = await import('@/data/regions');
      const region = CustomMap.find(({ regionKey }) => regionKey === key);
      setCurrentRegion({ title: region?.title.textParts.join(' '), color: region?.color });
    };

    if (key) {
      loadCustomMap();
    } else {
      setCurrentRegion({});
    }
  }, [key]);

  return { title: currentRegion.title || '', color: currentRegion.color || '' };
};

export default useRegionContext;
