import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserRequest } from "../../services/actions/getUser";
import { updateTokenRequest } from "../../services/actions/updateToken";
import { Redirect } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

export function NotUserRoute({ children, ...rest }) {
  const user = useSelector((store) => store.user.isUser);

  console.log(user);

  return <Route {...rest} render={() => (user ? (<Redirect to={{ pathname: "/" }} />) : children)} />;
}
