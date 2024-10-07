import { useEffect, useState } from "react";
import { getAssets } from "services";

export function useGetAssets() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAssets = async () => {
      setIsLoading(true);
      const assets = await getAssets();
      setData(assets);
      setIsLoading(false);
    };
    fetchAssets();
  }, []);

  return {
    data,
    isLoading,
  };
}
