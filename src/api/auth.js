import { apiClient } from "./apiClient";

async function login({ email, password }) {
  return await apiClient.customFetch("/login", {
    email,
    password,
  });
}

async function register({ fullname, username, email, password }) {
  return await apiClient.customFetch("/register", {
    fullname,
    username,
    email,
    password,
  });
}

export { login, register };
