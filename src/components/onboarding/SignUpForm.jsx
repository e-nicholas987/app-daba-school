import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SectionWrapper } from "../../styles/SectionWrapper.styled";
import { RedLink } from "../../styles/RedLink.styled";
import { SectionTitle } from "../../styles/SectionTitle.styled";
import { useFormInput } from "../../hooks/useFormInput";
import { FormError } from "../../styles/FormError.styled";
import CloseButton from "../button/CloseButton";
import PrimaryButton from "../button/PrimaryButton";
import { validateForm } from "../../utilities/validateForm";
import { createUser, updateUserProfile } from "../../api/auth";
import { useAuth } from "../../hooks/useAuth";

const SignUpForm = () => {
  const { setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const errorTypes = {
    "auth/email-already-in-use": { message: "Email already exists" },
    "auth/network-request-failed": {
      message: "Something went wrong ",
    },
  };

  const [firstName, firstNameInput] = useFormInput({
    label: "First Name",
    name: "firstName",
    placeholder: "First Name",
  });
  const [lastName, lastNameInput] = useFormInput({
    label: "Last Name",
    name: "lastName",
    placeholder: "Last Name",
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { firstName, lastName, email, password };
    const error = validateForm(formData);
    if (error) return setErrorMessage(error);
    
    setIsLoading(true);
    createUser({email, password})
      .then((userCredential) => {
        const fullName = `${firstName} ${lastName}`;
        updateUserProfile({ displayName: fullName })
          .then(() => {
            const { accessToken, displayName, email } = userCredential.user;
            setAuth({ token: accessToken, displayName, email });
            navigate("../dashboard");
          })
          .catch((error) => setErrorMessage(error?.code));
        setIsLoading(false);
      })
      .catch((error) => {
        const errorMessage = errorTypes[error.code].message;
        setErrorMessage(errorMessage);
        setIsLoading(false);
      });
  };

  return (
    <SectionWrapper>
      <CloseButton />
      <SectionTitle>Sign Up</SectionTitle>
      <form onSubmit={handleSubmit}>
        {errorMessage && <FormError> {errorMessage} </FormError>}

        <FormInputContainer>
          {firstNameInput}
          {lastNameInput}
          {emailInput}
          {passwordInput}
        </FormInputContainer>

        <PrimaryButton
          defaultText="Create my account"
          loadingText="Creating account..."
          isLoading={isLoading}
        />
      </form>
      <Text>
        Already have an account{" "}
        <RedLink to="../onboarding/login">Log in</RedLink>
      </Text>
    </SectionWrapper>
  );
};

// Styles

const FormInputContainer = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 2.5rem;
`;

const Text = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 16px;
`;

export default SignUpForm;
