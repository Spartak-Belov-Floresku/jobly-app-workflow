import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import GlobalContext from "../helper/GlobalContext";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routers -> Home
 */

const Home = () => {
    
    const { currUser } = useContext(GlobalContext);
  
    return (
        <div className="Homepage">
          <div className="container text-center">
            <h1 className="mb-4 font-weight-bold">Jobly</h1>
            <p className="lead">All the jobs in one, convenient place.</p>
            {currUser
                ? <h2>
                  Welcome Back, {currUser.firstName || currUser.username}!
                </h2>
                : (
                    <p>
                      <Link className="btn btn-primary font-weight-bold home_a"
                            to="/login">
                        Log in
                      </Link>
                      <Link className="btn btn-primary font-weight-bold home_a"
                            to="/signup">
                        Sign up
                      </Link>
                    </p>
                )}
          </div>
        </div>
    );
}

export default Home;