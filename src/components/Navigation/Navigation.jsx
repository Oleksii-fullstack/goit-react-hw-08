import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const addActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav>
      <ul className={css.list}>
        <li>
          <CustomNavLink to={"/"}>Home Page</CustomNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <CustomNavLink className={addActive} to={"/contacts"}>
              Contacts
            </CustomNavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
