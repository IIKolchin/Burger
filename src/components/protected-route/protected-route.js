import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserRequest, GET_USER_SUCCESS } from "../../services/actions/getUser";
import { updateTokenRequest } from "../../services/actions/updateToken";
import { Redirect } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import { URL, checkResponse } from "../../utils/data";

export function ProtectedRoute({ children, ...rest }) {



  const user = useSelector((store) => store.user.isUser);
 
console.log(user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login"/* , state: { from: location } */ }} />
        )
      }
    />
  );
}
