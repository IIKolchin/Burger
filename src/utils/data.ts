import PropTypes from "prop-types";
import { getCookie } from "./cookie";
import {
  format,
  formatDistanceToNowStrict,
  isToday,
  isYesterday,
} from "date-fns";
import { ru } from "date-fns/locale";
import { TGetBurgerCount, TIngredients, TUser } from "../services/types/data";
import { AppThunk } from "../services/types";

// const URL = "https://norma.nomoreparties.space/api/";


// const checkResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Ошибка: ${res.status}`);
// };

// const getUserRequest = async (token: string | undefined) => {
//   const res = await fetch(`${URL}auth/user`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: token,
//     },
//   });
//   const data = await checkResponse(res);
//   return data;
// };

// const patchUserRequest = async (form: TUser) => {
//   const res = await fetch(`${URL}auth/user`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: getCookie("token"),
//     },
//     body: JSON.stringify(form),
//   });
//   const data = await checkResponse(res);
//   return data;
// };

// const updateTokenRequest = async (token: string | null) => {
//   const res = await fetch(`${URL}auth/token`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ token }),
//   });
//   const data = await checkResponse(res);
//   return data;
// };

// const getOrderRequest = async (id: string) => {
//   const res = await fetch(`${URL}orders`, {
//     method: "POST",
//       body: JSON.stringify({
//     ingredients: id,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: getCookie("token"),
//   },
// })
//   const data = await checkResponse(res);
//   return data;
// };


export const ingredientsCount = (arr: Array<TIngredients>) =>
  arr?.reduce(
    (prev: TGetBurgerCount, curr: TIngredients) => {
      const id = curr?._id;
      prev.count[id] = (prev.count[id] || 0) + 1;
      return prev;
    },
    { count: {} }
  );



export const getDateOrder = (date: string) => {
  const dateCreatedAt = new Date(date);
  const day = isToday(dateCreatedAt)
    ? "Сегодня"
    : isYesterday(dateCreatedAt)
    ? "Вчера"
    : formatDistanceToNowStrict(dateCreatedAt, {
        unit: "day",
        addSuffix: true,
        locale: ru,
      });
  const hour = format(dateCreatedAt, "p 'i-'O", { locale: ru });
  return `${day}, ${hour}`;
};
