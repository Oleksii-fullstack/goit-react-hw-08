import { AiFillPhone } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contactCard}>
      <div className={s.contactInfo}>
        <p className={s.contactLine}>
          <FaUserSecret />
          {name}
        </p>
        <p className={s.contactLine}>
          <AiFillPhone />
          {number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
