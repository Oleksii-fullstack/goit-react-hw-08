import CustomNavLink from "../CustomNavLink/CustomNavLink";

const AuthNav = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "16px" }}>
        <li>
          <CustomNavLink to="/login">Log In</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/register">Register</CustomNavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
