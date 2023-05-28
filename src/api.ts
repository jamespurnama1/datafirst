import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://datafirst-538f9-default-rtdb.asia-southeast1.firebasedatabase.app/`,
  headers: {
    "Content-type": "application/json",
  },
});

export function getAll(slug: string): Promise<any> {
  return apiClient.get(`/${slug}.json`);
}

export function get(slug: string, id: string): Promise<any> {
  return apiClient.get(`/${slug}/${id}.json`);
}
