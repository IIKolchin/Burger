import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getUserRequest } from "../../services/actions/getUser";
import { useEffect, useState } from 'react';


export function ProtectedRoute({ children, ...rest }) {

  const user = useSelector((store) => store.user.isUser);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUserRequest())
  }, []);


  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired,
  rest: PropTypes.object,
};
