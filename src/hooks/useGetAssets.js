import { useEffect, useState } from "react";

export function useGetAssets() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAssets = async () => {
      setIsLoading(true);
      const response = await fetch("/assets");
      const assets = await response.json();
      setData(assets);
      setIsLoading(false);
    };
    getAssets();
  }, []);

  return {
    data,
    isLoading,
  };
}
