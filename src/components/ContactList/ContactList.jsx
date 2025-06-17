import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
