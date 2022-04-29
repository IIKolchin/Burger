import PropTypes from "prop-types";
import { getCookie } from "../utils/cookie";
import {
  format,
  formatDistanceToNowStrict,
  isToday,
  isYesterday,
} from "date-fns";
import { ru } from "date-fns/locale";

const URL = "https://norma.nomoreparties.space/api/";

const dataPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  image_large: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
});

const dataOrderPropTypes = PropTypes.shape({
  createdAt: PropTypes.string,
  ingredients: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.number,
  status: PropTypes.string,
  updatedAt: PropTypes.string,
  _id: PropTypes.string,
});

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const getUserRequest = async (token) => {
  const res = await fetch(`${URL}auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
  const data = await checkResponse(res);
  return data;
};

const patchUserRequest = async (form) => {
  const res = await fetch(`${URL}auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    },
    body: JSON.stringify(form),
  });
  const data = await checkResponse(res);
  return data;
};

const updateTokenRequest = async (token) => {
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

const getOrderRequest = async (id) => {
  const res = await fetch(`${URL}orders`, {
    method: "POST",
      body: JSON.stringify({
    ingredients: id,
  }),
  headers: {
    "Content-Type": "application/json",
    Authorization: getCookie("token"),
  },
})
  const data = await checkResponse(res);
  return data;
};



const getDateOrder = (date) => {
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
  const hour = format(dateCreatedAt, "p 'i-'O", {locale: ru});
  return `${day}, ${hour}`    
};

export {
  URL,
  dataPropTypes,
  dataOrderPropTypes,
  checkResponse,
  getDateOrder,
  getUserRequest,
  updateTokenRequest,
  patchUserRequest,
  getOrderRequest,
};
