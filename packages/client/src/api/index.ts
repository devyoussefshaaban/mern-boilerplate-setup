import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

export type LoginRequestType = {
  email: string;
  password: string;
};

export type RegisterRequestBody = {
  username: string;
  email: string;
  password: string;
};

export const authApi = {
  login: (language: "en" | "ar", loginRequestBody: LoginRequestType) =>
    axios.post(`${BASE_URL}/auth/login`, loginRequestBody, {
      headers: {
        language,
      },
    }),

  register: (language: "en" | "ar", registerRequestBody: RegisterRequestBody) =>
    axios.post(`${BASE_URL}/auth/register`, registerRequestBody, {
      headers: {
        language,
      },
    }),

  getMe: (token: string) =>
    axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
