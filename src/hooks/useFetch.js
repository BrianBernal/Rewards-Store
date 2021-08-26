import { useState } from "react";

const INITIAL_ERROR = { isDetected: false, error: null };
const INITIAL_SUCCESS = { ok: false, res: null };

function useFetch() {
  const [error, setError] = useState(INITIAL_ERROR);
  const [success, setSuccess] = useState(INITIAL_SUCCESS);
  const [loading, setLoading] = useState(false);

  const fetchService = async (service, successFn, failFn) => {
    setSuccess(INITIAL_SUCCESS);
    setError(INITIAL_ERROR);
    setLoading(true);
    try {
      const res = await fetch(service.endpoint, service.initObj);
      const dataResponse = await res.json();
      if (!res.ok) {
        throw new Error(
          dataResponse.message || res.statusText || "Connection error"
        );
      }
      setSuccess({ ok: true, res: dataResponse });
      setError(INITIAL_ERROR);
      if (typeof successFn === "function") successFn(dataResponse);
    } catch (error) {
      console.error(error);
      setSuccess(INITIAL_SUCCESS);
      setError({ isDetected: true, error: error.message });
      if (typeof failFn === "function") failFn(error);
    } finally {
      setLoading(false);
    }
  };

  return { success, error, loading, fetchService };
}

export default useFetch;
