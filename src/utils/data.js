import PropTypes from "prop-types";

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

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const getDateOrder = (date) => {
  const dateNow = new Date().toLocaleString();
  const createdAt = new Date(date);
  const dateOrder = createdAt.toLocaleString();
  const timeZone = (createdAt.getTimezoneOffset() / 60) * -1;
  const dayNumber = dateNow.slice(0, 2) - dateOrder.slice(0, 2);
  const hours = dateOrder.slice(12, 17);
  const day =
    dayNumber === 0
      ? "Cегодня"
      : dayNumber === 1
      ? "Вчера"
      : `${dayNumber}  дня(-ей) назад`;
  return `${day}, ${hours} i-GMT+${timeZone}`;
};

export { URL, dataPropTypes, checkResponse, getDateOrder };
