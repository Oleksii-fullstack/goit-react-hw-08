import { useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationLoginSchema } from "../../validation/validation";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(fetchLogin(values)).unwrap();
      toast.success(`${data.user.name} successfully login`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };
  return (
    <div className={s.box}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationLoginSchema}
      >
        <Form className={s.formWrapper}>
          <div className={s.fieldBox}>
            <Field
              type="email"
              className={s.input}
              placeholder="Enter your email"
              name="email"
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>
          <div className={s.fieldBox}>
            <Field
              className={s.input}
              placeholder="Enter your password"
              name="password"
              type={"password"}
            />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>

          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
