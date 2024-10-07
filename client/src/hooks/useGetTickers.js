import { useEffect, useState } from "react";
import { getTicker } from "services";

export function useGetTickers(currency = "USD", amount) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTicker = async () => {
      if (!amount) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const tickers = await getTicker(currency, amount);
      setData(tickers);
      setIsLoading(false);
    };

    fetchTicker();
  }, [currency, amount]);

  return {
    data,
    isLoading,
  };
}
