import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import GlobalContext from "../helper/GlobalContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

const LoginRoutes = ({ exact, path, children }) => {
  
  const { currUser } = useContext(GlobalContext);

  if (!currUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default LoginRoutes;
