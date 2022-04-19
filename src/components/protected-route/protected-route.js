import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/actions/getUser";

export function ProtectedRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const isUser = useSelector((store) => store.user.isUser);
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await dispatch(getUser());
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
  rest: PropTypes.object,
};
