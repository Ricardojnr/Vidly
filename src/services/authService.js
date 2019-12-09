import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";
import httpService from "../services/httpService";

const apiEndPoint = apiUrl + "/auth";

const tokenKey = "token";

httpService.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await httpService.post(apiEndPoint, {
    email,
    password
  });
  localStorage.setItem(tokenKey, jwt);
}

export async function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function loginwithJwt() {
  localStorage.getItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginwithJwt,
  logout,
  getCurrentUser,
  getJwt
};
