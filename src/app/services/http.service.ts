import { token } from "./auth.service";

const env = import.meta.env;
export const basePath = `http://${env.VITE_API_HOST}:${env.VITE_API_PORT}`;

export function authHeaders(): { headers: { Authorization: string } } {
  return { headers: { Authorization: `Bearer ${token()}` } };
}
export function authHeader(): { Authorization: string } {
  return { Authorization: `Bearer ${token()}` };
}

export function doGet(url: string) {
  return fetch(url, authHeaders());
}

export function doPost(url: string, body: any) {
  console.log("🚀 ~ file: http.service.ts:15 ~ doPost ~ doPost:", body);
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(body),
  };
  return fetch(url, fetchOptions);
}
