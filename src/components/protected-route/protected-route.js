import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";


export function ProtectedRoute({ children, ...rest }) {

  const user = useSelector((store) => store.user.isUser);

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
