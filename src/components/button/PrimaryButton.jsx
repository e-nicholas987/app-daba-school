import styled from "styled-components";

const PrimaryButton = ({ defaultText, loadingText, onButtonClick, isLoading }) => {
  return !isLoading ? (
    <StyledButtonDefault onClick={onButtonClick}>
      {defaultText}
    </StyledButtonDefault>
  ) : (
    <StyledButtonLoading>{loadingText}</StyledButtonLoading>
  );
};

// Styles

const StyledButtonDefault = styled.button`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: rgb(216, 56, 58);
  font-weight: 700;
  font-size: 16px;
  color: rgb(255, 255, 255);
  margin-bottom: 0 auto 0.5rem auto;
`;

const StyledButtonLoading = styled(StyledButtonDefault)`
  cursor: wait;
  opacity: 0.8;
`;

export default PrimaryButton;
