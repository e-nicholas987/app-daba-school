import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../assets/images/google-icon.svg";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../hooks/useAuth";
import { getGoogleUserProfile } from "../../api/auth";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      getGoogleUserProfile({ accessToken })
        .then((res) => res.json())
        .then((data) => {
          const { name, email } = data;
          if (data?.email) {
            setAuth({
              token: accessToken,
              displayName: name,
              email,
            });
            navigate("../dashboard");
          }
        })
        .catch(() => prompt("Login Failed"));
    },
    onError: () => {
      prompt("Login Failed");
    },
  });

  return (
    <div>
      <StyledButton onClick={() => login()}>
        <GoogleIcon />
        <span>Continue with Google</span>
      </StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  height: 50px;
  width: 70%;
  background-color: rgb(29, 79, 153);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: auto;
  margin-bottom: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  span {
    font-family: inherit;
    font-size: 16px;
    font-weight: 200;
    color: rgb(255, 255, 255);
  }
`;

export default GoogleLoginButton;
