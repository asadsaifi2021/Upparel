import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url, sort) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let fullUrl = url;
        if (sort && sort !== null) {
          fullUrl += `&sort=price:${sort}`;
        }
        const res = await makeRequest.get(fullUrl);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, sort]);

  return { data, loading, error };
};

export default useFetch;
