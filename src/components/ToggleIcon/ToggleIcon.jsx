import { FaEye, FaEyeSlash } from "react-icons/fa";
import s from "./ToggleIcon.module.css";

const ToggleIcon = ({ onClick, showPassword }) => {
  return (
    <button className={s.iconBtn} onClick={onClick}>
      {showPassword ? <FaEye /> : <FaEyeSlash />}
    </button>
  );
};

export default ToggleIcon;
