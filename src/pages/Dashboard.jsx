import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormError } from "../styles/FormError.styled";
import PrimaryButton from "../components/button/PrimaryButton";
import { useAuth } from "../hooks/useAuth";
import { logOut } from "../api/auth";

const Dashboard = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    setAuth("");
    navigate("../onboarding")
    logOut()
      .then(() => {})
      .catch((error) => {
        setErrorMessage(error?.code);
      });
  };

  return (
    <SectionWrapper>
      <div>
        {errorMessage && <FormError>{errorMessage}</FormError>}
        <BigText>
          Welcome 👋
          <br />
          {auth.displayName}
        </BigText>
        <ButtonContainer>
          <PrimaryButton
            defaultText="Sign Out"
            loadingText="Signing out.."
            onButtonClick={handleButtonClick}
          />
        </ButtonContainer>
      </div>
    </SectionWrapper>
  );
};

// Styles

const SectionWrapper = styled.section`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  margin-bottom: 2.5rem;
  padding: 3rem 1.25rem;
`;

const BigText = styled.h1`
  font-size: 30px;
  color: rgb(225, 225, 225);
  text-align: center;
  margin-bottom: 5rem;
`;

const ButtonContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export default Dashboard;
