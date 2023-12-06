import { createSignal } from "solid-js";
import { CreateUserForm } from "../components/auth/Signup";
import { basePath } from "./http.service";

export const [token, setToken] = createSignal<string | undefined>(getToken());

export async function login(userDetails: { email: string; password: string }) {
  try {
    const response = await fetch(`${basePath}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    saveLoginCreds(data.jwt);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(userDetails: CreateUserForm) {
  try {
    const response = await fetch(`${basePath}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    saveLoginCreds(data.jwt);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export function saveLoginCreds(jwt: string) {
  localStorage.setItem("fern", jwt);
  setToken(jwt);
}
export function getToken(): string | undefined {
  return localStorage.getItem("fern") ?? undefined;
}

export function clearToken() {
  localStorage.removeItem("fern");
  setToken(undefined);
}
