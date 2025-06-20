import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import s from "../pages/HomePage.module.css";

const HomePage = () => {
  return (
    // <Section>
    //   <Container>
    <div className={s.wrapper}>
      <span className={s.emoji}>📞</span>
      <h1 className={s.title}>Welcome to your Phonebook App!</h1>
      <p className={s.subtitle}>
        Manage your contacts easily and securely. To get started, please
        register or login.
      </p>
    </div>
    //   </Container>
    // </Section>
  );
};

export default HomePage;
