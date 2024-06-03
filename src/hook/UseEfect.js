import axios from "../components/Api/Api";
import { useEffect, useState } from "react";

export const UseEfect = (api, ...res) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(api)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [...res]);

  return {
    data,
    loading,
  };
};
