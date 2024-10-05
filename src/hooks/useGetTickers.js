import { useEffect, useState } from "react";

export function useGetTickers(currency = "USD") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTickers = async () => {
      setIsLoading(true);
      const response = await fetch(`/ticker/${currency}`);
      const tickers = await response.json();
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
