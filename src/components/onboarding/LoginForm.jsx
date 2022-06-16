import { useState } from "react";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import { SectionTitle } from "../../styles/SectionTitle.styled";
import { SectionWrapper } from "../../styles/SectionWrapper.styled";
import { RedLink } from "../../styles/RedLink.styled";
import { FormError } from "../../styles/FormError.styled";
import PrimaryButton from "../button/PrimaryButton";
import CloseButton from "../button/CloseButton";
import { useFormInput } from "../../hooks/useFormInput";
import { logIn } from "../../api/auth";
import { useAuth } from "../../hooks/useAuth";
import { validateForm } from "../../utilities/validateForm";

const LoginForm = () => {
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const errorTypes = {
    "auth/wrong-password": { message: "Invalid credentials provided" },
    "auth/user-not-found": { message: "Invalid Email Provided" },
    "auth/network-request-failed": {
      message: "Something went wrong ",
    },
  };

  const [email, emailInput] = useFormInput({
    label: "Email",
    name: "firstName",
    placeholder: "user@example.com",
    type: "email",
  });
  const [password, passwordInput] = useFormInput({
    label: "Password",
    name: "password",
    placeholder: "********",
    type: "password",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    const error = validateForm(formData);
    if (error) return setErrorMessage(error);

    setIsLoading(true);
    logIn(formData)
      .then((userCredential) => {
        const { accessToken, displayName, email } = userCredential.user;
        setAuth({ token: accessToken, displayName, email });
        navigate("../dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = errorTypes[errorCode].message;
        setErrorMessage(errorMessage);
        setIsLoading(false);
      });
  };


  return (
    <SectionWrapper>
      <CloseButton />
      <SectionTitle>Login</SectionTitle>
      <form onSubmit={handleSubmit}>
        {errorMessage && <FormError> {errorMessage} </FormError>}

        <FormInputContainer>
          {emailInput}
          {passwordInput}
          <RedLink to="../onboarding/forgot-password">Forgot password?</RedLink>
        </FormInputContainer>

        <PrimaryButton
          defaultText="Login to your account"
          loadingText="Logging in..."
          isLoading={isLoading}
        ></PrimaryButton>
      </form>
      <Text>
        Don't own an account?{" "}
        <RedLink to="../onboarding/signup">Sign Up</RedLink>
      </Text>
    </SectionWrapper>
  );
};

// Styles
const FormInputContainer = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 2rem;

  a {
    margin-top: -4px;
  }
`;

const ForgotPassword = styled(RedLink)`
  line-height: 24px;
`;

const Text = styled.p`
  margin-top: 1.5rem;
  text-align: center;
`;

export default LoginForm;
