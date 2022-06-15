import styled from "styled-components";
import OnboardingDescription from "../components/onboarding/OnboardingDescription";
import { Outlet } from "react-router-dom";

const Onboarding = () => {
  return (
    <GridContainer>
      <OnboardingDescription />
      <Outlet />
    </GridContainer>
  );
};

// Styles

const GridContainer = styled.section`
  display: block;
  width: 100vw;
  grid-template-columns: 60% 40%;

  @media (min-width: 767px) {
    display: grid;
  }
`;

export default Onboarding;
