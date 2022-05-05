import { getCookie } from "./cookie";
import { TUser } from "../services/types/data";

const URL = "https://norma.nomoreparties.space/api/";

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const authorizationRequest = async (form: TUser) => {
  const res = await fetch(`${URL}auth/login`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await checkResponse(res);
  return data;
};

const getUserRequest = async (token: string | undefined) => {
  const res = await fetch(`${URL}auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token as string,
    },
  });
  const data = await checkResponse(res);
  return data;
};

const patchUserRequest = async (form: TUser) => {
  const res = await fetch(`${URL}auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token") as string,
    },
    body: JSON.stringify(form),
  });
  const data = await checkResponse(res);
  return data;
};

const updateTokenRequest = async (token: string | null) => {
  const res = await fetch(`${URL}auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  const data = await checkResponse(res);
  return data;
};

const logoutRequest = async () => {
  const res = await fetch(`${URL}auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("token"),
    }),
  });
  const data = await checkResponse(res);
  return data;
};

const getNewPasswordRequest = async (form: TUser) => {
  const res = await fetch(`${URL}password-reset/reset`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await checkResponse(res);
  return data;
};

const forgotPasswordRequest = async (form: TUser) => {
  const res = await fetch(`${URL}password-reset`, {
    method: "POST",
    body: JSON.stringify({
      email: form,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await checkResponse(res);
  return data;
};

const registerRequest = async (form: TUser) => {
  const res = await fetch(`${URL}auth/register`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await checkResponse(res);
  return data;
};

const getOrderRequest = async (id: string) => {
  const res = await fetch(`${URL}orders`, {
    method: "POST",
    body: JSON.stringify({
      ingredients: id,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token") as string,
    },
  });
  const data = await checkResponse(res);
  return data;
};

export {
  URL,
  checkResponse,
  getUserRequest,
  updateTokenRequest,
  patchUserRequest,
  getOrderRequest,
  authorizationRequest,
  logoutRequest,
  getNewPasswordRequest,
  registerRequest,
  forgotPasswordRequest,
};
