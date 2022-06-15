import styled from "styled-components";
import { useState } from "react";

export const useFormInput = ({ label, type = "text", name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onButtonClick = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // Input Element

  const inputElement = (
    <FormGroup>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <FormInputWrapper>
        <StyledInput
          type={type === "password" && showPassword ? "text" : type}
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {type === "password" && (
          <ShowPassword onClick={onButtonClick}>
            {showPassword ? "Hide" : "Show"}
          </ShowPassword>
        )}
      </FormInputWrapper>
    </FormGroup>
  );

  return [inputValue, inputElement];
};

// Styles

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const StyledLabel = styled.label`
  line-height: 24px;
  font-weight: 700;
  color: rgb(83, 92, 101);
`;

const FormInputWrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 61px;
    height: 100%;
    font-weight: 400;
    display: flex;
    align-items: center;
    color: rgb(216, 56, 58);
    background: transparent;
  }
`;

const ShowPassword = styled.button`
  color: rgb(216, 56, 58);
  font-size: 16px;
`;

const StyledInput = styled.input`
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
  width: 100%;
  padding: 13px 0.75rem;
  border: 1px solid rgb(32, 37, 50);
  border-radius: 4px;
  outline: none;
  height: 52px;
  font-size: 16px;

  &::placeholder {
    color: rgb(156, 163, 175);
    font-weight: 400;
    font-size: 16px;
  }

  &:focus {
    background: rgb(0, 0, 0);
  }
`;
