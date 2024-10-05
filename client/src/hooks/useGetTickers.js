import { useEffect, useState } from "react";
import { getTicker } from "services";

export function useGetTickers(currency = "USD", mapData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTicker = async () => {
      setIsLoading(true);
      const tickers = await getTicker(currency);

      if (mapData) {
        const mapedData = mapData(tickers);
        setData(mapedData);
      } else {
        setData(tickers);
      }

      setIsLoading(false);
    };
    fetchTicker();
  }, [currency, mapData]);

  return {
    data,
    isLoading,
  };
}
