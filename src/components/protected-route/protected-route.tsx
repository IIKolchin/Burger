import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../services/types/index";
import { getUser } from "../../services/actions/user";

type TprotectedRouteProps = {
  path: string;
  exact: boolean;
}

export const ProtectedRoute: FC<TprotectedRouteProps> = ({ children, ...rest }) => {
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

// ProtectedRoute.propTypes = {
//   children: PropTypes.element.isRequired,
//   rest: PropTypes.object,
// };
