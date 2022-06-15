import styled from "styled-components";

const NotFound = () => {
  return (
    <SectionWrapper>
      <h1>404 Not Found</h1>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  text-align: center;
  padding-top: 3rem;
`;

export default NotFound;
