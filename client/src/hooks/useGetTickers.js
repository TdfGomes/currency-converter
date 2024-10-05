import { useEffect, useState } from "react";
import { getTicker } from "services";

export function useGetTickers(currency = "USD") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTickers = async () => {
      setIsLoading(true);
      const tickers = await getTicker(currency);
      setData(tickers);
      setIsLoading(false);
    };
    getTickers();
  }, [currency]);

  return {
    data,
    isLoading,
  };
}
