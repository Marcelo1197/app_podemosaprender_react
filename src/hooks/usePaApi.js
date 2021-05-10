import React, { useEffect, useState } from "react";

import { fetchConToken } from "../services/pa-auth";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const usePaApi = (url, options = {}) => {
  const [hookState, setHookState] = useState({
    status: apiStates.LOADING,
    error: "",
    data: [],
  });

  const setPartData = (partialData) =>
    setHookState((prevState) => ({ ...prevState, ...partialData }));

  const fetchData = async () => {
    setPartData({
      status: apiStates.LOADING,
    });
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw {
          status: res.status,
          statusText: !res.statusText
            ? "Ups, error en la request"
            : res.statusText,
        };
      }
      const data = await res.json();
      setPartData({
        status: apiStates.SUCCESS,
        data: data,
      });
    } catch (err) {
      console.info("se ejecuto el catch");
      setPartData({
        status: apiStates.ERROR,
        data: [],
        error: err.statusText,
      });
    }
  };

  useEffect(() => {
    //DBG: setTimeout(fetchData, 4000);
    fetchData();
  }, [url]);

  return [hookState];
};
