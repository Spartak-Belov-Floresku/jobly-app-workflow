import './Forms.css';
import { useState, useContext } from "react";
import GlobalContext from "../helper/GlobalContext";
import { Redirect, useHistory} from "react-router-dom";
import useFields from '../hooks/useFields';
import ErrorsHandler from '../helper/ErrorsHandler';

/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to /companies route
 *
 * Routers -> LoginForm -> ErrorsHandler
 * Routed as /login
 */

const LoginForm = ({login}) => {

    const { currUser } = useContext(GlobalContext);
    const[ errors, setErrors ] = useState(false);
    const history = useHistory();

    const [formData, handleChange, releaseButton ] = useFields({
      username: "",
      password: ""
    });
    
    if(currUser)
        return <Redirect to="/" />

    /** Handle form submit:
    *
    * Calls login func prop and, if successful, redirect to /companies.
    */
    const handleData = async data => {
        const responce = await login(data);
        console.log(responce)
        if(responce.result){
            history.push("/companies");
        }else{
            setErrors(responce.errors);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleData(formData);
    }

    return (
            <div className="LoginForm">
                <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <h2 className="mb-3">Sign Up</h2>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        id="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                {errors.length? <ErrorsHandler type="danger" messages={errors} />: null}
                                {
                                    !releaseButton()? <button disabled className="btn btn-primary float-right">Log In</button>: 
                                                      <button className="btn btn-primary float-right">Log In</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      );
}

export default LoginForm;