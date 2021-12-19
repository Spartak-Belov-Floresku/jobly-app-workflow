import "./NavBar.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import GlobalContext from "../helper/GlobalContext";

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

const NavBar = ({ Logout }) => {
  
  const { currUser } = useContext(GlobalContext);

  const loggedInNav = () => {
    return (
        <div>
          <Navbar expand="md">
            <NavLink to="/" className="navbar-brand">
              Jobly
            </NavLink>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/companies">Companies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/jobs">Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login" onClick={Logout}>Log out: <b className="username">{currUser.username}</b></NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
    );
  }

  const loggedOutNav = () => {
    return (
        <div>
          <Navbar expand="md">
            <NavLink to="/" className="navbar-brand">
              Jobly
            </NavLink>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/signup">Sing Up</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
    );
  }

  return (currUser ? loggedInNav() : loggedOutNav());
}

export default NavBar;