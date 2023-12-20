import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const useData = (endpoint, customConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = endpoint; // endpoint를 url로 사용
    apiClient
      .get(url, customConfig) // customConfig을 사용하여 설정 전달
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, deps || []); // deps가 존재하면 deps를 사용, 없으면 빈 배열 사용

  return { data, error, isLoading };
};

export default useData;
