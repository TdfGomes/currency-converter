import { useCallback, useMemo } from "react";

export function useSearchParams() {
  const url = useMemo(() => new URL(window.location.origin), []);
  const search = useMemo(() => new URLSearchParams(url), [url]);

  const setParam = useCallback(
    (key, value) => {
      search.set(key, value);
      window.history.pushState({}, "", `${window.location.pathname}?${search.toString()}`);
    },
    [search],
  );

  const getParam = useCallback((key) => {
    const search = new URLSearchParams(window.location.search);

    return search.get(key);
  }, []);

  return { setParam, getParam };
}
