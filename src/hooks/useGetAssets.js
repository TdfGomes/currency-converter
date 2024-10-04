import { useEffect, useState } from "react";

export function useGetAssets(sdk) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTickers = async () => {
      setIsLoading(true);
      const assets = await sdk.paginate(`${process.env.REACT_APP_BASE_URL}/V0/assets`, 1, 150, {
        authenticate: false,
      });
      setIsLoading(false);
      setData(assets);
    };
    getTickers();
  }, [sdk]);

  return {
    data,
    isLoading,
  };
}
