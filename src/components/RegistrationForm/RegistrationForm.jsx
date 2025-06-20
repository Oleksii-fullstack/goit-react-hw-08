import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationRegisterSchema } from "../../validation/validation";
import toast from "react-hot-toast";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import ToggleIcon from "../ToggleIcon/ToggleIcon";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = usePasswordToggle([
    "password",
    "confirmPassword",
  ]);

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(fetchRegister(values)).unwrap();
      toast.success(`${data.user.name} successfully register`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };
  return (
    <div className={s.box}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationRegisterSchema}
      >
        <Form className={s.formWrapper}>
          <div className={s.fieldBox}>
            <Field
              type="text"
              className={s.input}
              placeholder="Enter your name"
              name="name"
            />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
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
              type={showPassword.password ? "text" : "password"}
            />
            <ErrorMessage name="password" component="div" className={s.error} />
            <ToggleIcon
              onClick={() => setShowPassword("password")}
              showPassword={showPassword.password}
            />
          </div>

          <div className={s.fieldBox}>
            <Field
              className={s.input}
              placeholder="Confirm your password"
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={s.error}
            />
            <ToggleIcon
              onClick={() => setShowPassword("confirmPassword")}
              showPassword={showPassword.confirmPassword}
            />
          </div>

          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
