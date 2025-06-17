import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <div className={s.labelName}>Find contacts by name</div>
      <input
        className={s.input}
        placeholder="type to search"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

export default SearchBox;
