import styled from "styled-components";
import heroImage from "../../assets/images/hero-image.png";

const OnboardingDescription = () => {
  return (
    <SectionWrapper>
      <Container>
        <Image src={heroImage} />
        <StyledHeader>Your Money-Making Machine in your Pocket</StyledHeader>
        <Text>
          Gain Relevant Strategies & Global Skills for Scaling, Wealth Creation
          and Financial Freedom.
        </Text>
      </Container>
    </SectionWrapper>
  );
};

// Styles

const SectionWrapper = styled.section`
  display: none;
  background-color: rgb(0, 0, 0);
  padding-left: 5rem;
  padding-right: 5rem;
  height: 100vh;

  @media (min-width: 767px) {
    display: block;
  }
`;

const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto 2.5rem auto;
  max-width: 100%;
`;

const StyledHeader = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 45px;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: rgb(116, 116, 116);
  line-height: 27px;
  text-align: center;

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export default OnboardingDescription;
