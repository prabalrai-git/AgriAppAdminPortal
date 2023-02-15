import axios from "axios";
import { BASE_URL } from "../constants/url";

// import { BASE_URL } from './url';

export const httpBase = () => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    // "Access-Control-Allow-Origin": "*",
  };

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: headers,
    mode: "no-cors",
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return error;
    }
  );

  return instance;
};

export const httpBaseJson = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: headers,
    mode: "no-cors",
    method: "POST",
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return error;
    }
  );

  return instance;
};
export const httpSeperateBaseJson = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: headers,
    mode: "no-cors",
    method: "POST",
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return error;
    }
  );

  return instance;
};
