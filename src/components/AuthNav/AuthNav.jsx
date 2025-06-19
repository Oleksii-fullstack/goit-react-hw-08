import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
