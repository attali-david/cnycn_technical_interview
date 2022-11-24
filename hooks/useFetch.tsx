import { useState, useCallback, useEffect } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [results, setResults] = useState();
  const baseURL = "//api.openweathermap.org";

  const getResults = useCallback(async (url: string) => {
    setLoading((prev) => !prev);
    try {
      const res = await fetch(baseURL + url, { mode: "cors" });
      const json = await res.json();
      setResults(json);
    } catch (err) {
      if (err instanceof Error) setError(err);
      else console.error("Unknown Error");
    } finally {
      setLoading((prev) => !prev);
    }
  }, []);

  return { results, error, loading, getResults };
};

export default useFetch;
