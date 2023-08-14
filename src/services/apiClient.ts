import axios from "axios";

export function getAPIClient() {
  //create api
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": import.meta.env.VITE_API_SECRET,
    },
  });

  return api;
}
