import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../home/Home";
import SignUpForm from "../forms/SignUpForm";
import LoginForm from "../forms/LoginForm";
import LoginRoutes from "./LoginRoutes";
import Companies from "../companies/Companies";
import CompanyDetails from "../companies/CompanyDetails";
import GetAllJobs from "../jobs/GetAllJobs";
import UserForm from "../forms/UserForm";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <LoginRoutes>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ Signup, Login }) {
  
  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <LoginForm login={Login} />
          </Route>

          <Route exact path="/signup">
            <SignUpForm signup={Signup} />
          </Route>

          <LoginRoutes exact path="/companies">
            <Companies />
          </LoginRoutes>

          <LoginRoutes exact path="/companies/:name">
            <CompanyDetails />
          </LoginRoutes>

          <LoginRoutes exact path="/jobs">
            <GetAllJobs />
          </LoginRoutes>

          <LoginRoutes exact path="/profile">
            <UserForm />
          </LoginRoutes>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
