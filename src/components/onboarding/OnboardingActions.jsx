import styled from "styled-components";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../button/GoogleLoginButton";

const OnboardingActions = () => {
  return (
    <SectionWrapper>
      <Container>
        <StyledHeader>Your Money-Making Machine in your Pocket</StyledHeader>
        <Text>
          By creating an account, you agree to your{" "}
          <a
            href="https://www.daba.school/terms"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://daba.school/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </Text>

        <GoogleLoginButton />
        <Line>
          <div></div>
          <span>OR</span>
          <div></div>
        </Line>
        <Link to="signup">
          <RedButton>Create my account</RedButton>
        </Link>
        <Link to="login">
          <PlainButton>Login to my account</PlainButton>
        </Link>
        <a href="https://app.daba.school/courses">
          <HoverButton>Browse courses</HoverButton>
        </a>
      </Container>
    </SectionWrapper>
  );
};

// Styles

const SectionWrapper = styled.section`
  min-height: 100vh;
  padding-top: 5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: rgba(8, 8, 8, 1);
  display: flex;
  justify-content: center;

  @media (min-width: 767px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

const Container = styled.div`
  text-align: center;
  background-color: rgba(8, 8, 8, 1);
`;

const StyledHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  margin: 0 auto 14px auto;
  text-align: center;
  max-width: 24rem;
`;

const Text = styled.p`
  margin-bottom: 28px;
  line-height: 24px;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;

  div {
    width: 100%;
    background-color: rgba(196, 196, 196, 1);
    height: 1.6px;
  }

  span {
    color: rgba(164, 164, 164, 1);
    line-height: 24px;
    margin-left: 14px;
    margin-right: 14px;
  }
`;

const RedButton = styled.button`
  height: 50px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 0 auto .5rem auto ;
  background: rgb(216, 56, 58);
  font-weight: 700;
  font-size: 16px;
  color: rgb(255, 255, 255);
`;

const PlainButton = styled(RedButton)`
  background: transparent;
  font-weight: 400;
  font-size: 16px;
  color: rgb(255, 255, 255);
`;

const HoverButton = styled(RedButton)`
  border: 2px solid rgb(216, 56, 58);
  margin: auto;
  background: transparent;
  color: rgb(216, 56, 58);
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgb(216, 56, 58);
    color: rgb(255, 255, 255);
  }

  @media (min-width: 767px) {
    margin: 5.5rem auto 0 auto;
  }
`;

export default OnboardingActions;
