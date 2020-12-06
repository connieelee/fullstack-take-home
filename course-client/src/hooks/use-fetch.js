import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (initialData, url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      setData(initialData);
      setError(null);

      if (url) {
        setLoading(true);
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return [loading, data, error, setData];
};

export default useFetch;
