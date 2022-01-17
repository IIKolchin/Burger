import PropTypes from "prop-types";

const url = 'https://norma.nomoreparties.space/api/ingredients';



const dataPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
});

export { url, dataPropTypes };
