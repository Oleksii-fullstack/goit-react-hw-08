import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

const ContactFormValidationSchema = Yup.object({
  name: Yup.string().required().min(2).max(20),
  number: Yup.string().required().min(5).max(13),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactFormValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <h1 className={s.title}>Phonebook</h1>
        <label className={s.label}>
          <span>Name</span>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="type your name here"
          />
          <ErrorMessage
            className={s.errorMessage}
            component={"p"}
            name="name"
          />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <Field
            className={s.input}
            type="text"
            name="number"
            placeholder="type your number here"
          />
          <ErrorMessage
            className={s.errorMessage}
            component={"p"}
            name="number"
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
