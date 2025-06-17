import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/auth/selectors";
import Loader from "../components/Loader/Loader";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <LoginForm />
      {isLoading && <Loader />}
    </>
  );
};

export default LoginPage;
