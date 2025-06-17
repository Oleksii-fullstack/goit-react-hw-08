import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { selectError, selectLoading } from "./redux/selectors";

const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <ContactForm />
        <SearchBox />
        {!error && <ContactList />}
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
      </Container>
    </Section>
  );
};

export default App;
