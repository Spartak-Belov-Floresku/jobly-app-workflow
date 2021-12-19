import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import jwt from "jsonwebtoken";

import './App.css';
import GlobalContext from "./helper/GlobalContext";
import Loader from "./helper/Loader";
import Api from "./dbClass/Api";
import Routes from "./routers/Routers";
import NavBar from "./nav/NavBar";
import useStorage from "./hooks/useStorage";


export const TOKEN_OBJ = "token";

/** Jobly application.
 *
 * - infoLoaded: has user data been pulled from API?
 *   (this manages spinner for "loading...")
 *
 * - currUser: user obj from API. This becomes the canonical way to tell
 *   if someone is logged in. This is passed around via context throughout app.
 *
 * - token: for logged in users, this is their authentication JWT.
 *   Is required to be set for most API calls. This is initially read from
 *   localStorage and synced to there via the useStorage hook.
 *
 * App -> Routers
 */

function App() {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useStorage(TOKEN_OBJ);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(() => {

    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          Api.token = token;
          let currUser = await Api.getCurrUser(username);
          setCurrUser(currUser);
          setApplicationIds(new Set(currUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  // process data from the registration form to register a new user
  const SignupFunc = async (data) => {
    try{
      const token = await Api.register(data);
      setToken(token)
      return{result: true}
    }catch (err) {
      return{result: false, errors: err}
    }
  }

  // handle login form for user login
  const LoginFunc = async (loginData) => {
    try {
      let token = await Api.login(loginData);
      setToken(token);
      return { result: true };
    } catch (err) {
      return{result: false, errors: err}
    }
  }

  // handle logout of the user and clean local storige
  const LogoutFunc = () => {
    setCurrUser(null);
    setToken(null);
  }

  // Checks if a job has been applied for
  const jobHasBeenApplied = (id) => {
    return applicationIds.has(id);
  }

  // handle apply to a job: make API call and update set of application IDs
  const applyToJob = (id) => {
    if (jobHasBeenApplied(id)) return;
    Api.applyToJob(currUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  if (!infoLoaded) return <Loader />;

  return (

    // BrouserRouter is used to pass test App.test.js

    <BrowserRouter>
      <GlobalContext.Provider value={{ currUser, setCurrUser, jobHasBeenApplied, applyToJob}}>
        <div className="App">
          <NavBar Logout={LogoutFunc} />
          <main>
            <Routes Signup={SignupFunc} Login={LoginFunc}/>
          </main>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
