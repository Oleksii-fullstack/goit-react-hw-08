import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/auth/selectors";
import Loader from "../components/Loader/Loader";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <RegistrationForm />
      {isLoading && <Loader />}
    </>
  );
};

export default RegistrationPage;
