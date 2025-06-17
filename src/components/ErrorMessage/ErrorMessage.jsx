import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <div className={css.error}>Sorry, something went wrong {error}</div>;
};

export default ErrorMessage;
