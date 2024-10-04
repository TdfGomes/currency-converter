import SDK from "@uphold/uphold-sdk-javascript";
import { useEffect, useState } from "react";

export function useGetTickers(sdk: typeof SDK, ticker = "USD") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTickers = async () => {
      setIsLoading(true);
      const tickers = await sdk.getTicker(ticker, {
        authenticate: false,
      });
      setIsLoading(false);
      setData(tickers);
    };
    getTickers();
  }, [sdk, ticker]);

  return {
    data,
    isLoading,
  };
}
