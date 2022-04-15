import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function ProtectedRoute({ children, ...rest }) {
  const user = localStorage.getItem("user");

  const [isUserLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    setUserLoaded(true);
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
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
  children: PropTypes.object.isRequired,
  rest: PropTypes.object,
};
