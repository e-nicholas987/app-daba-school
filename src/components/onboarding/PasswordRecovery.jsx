import styled from "styled-components";
import CloseButton from "../button/CloseButton";
import { SectionTitle } from "../../styles/SectionTitle.styled";
import { SectionWrapper } from "../../styles/SectionWrapper.styled";
import PrimaryButton from "../button/PrimaryButton";
import { RedLink } from "../../styles/RedLink.styled";
import { useFormInput } from "../../hooks/useFormInput";

const PasswordRecovery = () => {
  const [email, emailInput] = useFormInput({
    label: "Email",
    name: "firstName",
    placeholder: "user@example.com",
    type: "email",
  });
  return (
    <SectionWrapper>
      <CloseButton />
      <SectionTitle>Forgot Password</SectionTitle>
      <form>
        <FormInputContainer>{emailInput}</FormInputContainer>
        <PrimaryButton defaultText="Reset Password" />
      </form>
      <Text>
        Don't own an account?{" "}
        <RedLink to="../onboarding/sign-up">Sign up</RedLink>
      </Text>
    </SectionWrapper>
  );
};

// Styles

const FormInputContainer = styled.div`
  margin-bottom: 2.5rem;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 1.5rem;
`;

export default PasswordRecovery;