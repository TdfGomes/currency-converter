import { useEffect, useState } from "react";
import { getAssets } from "services";

export function useGetAssets(mapData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAssets = async () => {
      setIsLoading(true);
      const assets = await getAssets();

      if (mapData) {
        const mapedData = mapData(assets);
        setData(mapedData);
      } else {
        setData(assets);
      }

      setIsLoading(false);
    };
    fetchAssets();
  }, [mapData]);

  return {
    data,
    isLoading,
  };
}
