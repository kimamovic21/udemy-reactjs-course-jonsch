import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  const imgSource = isDarkMode ? '/logo-dark.png' : '/logo-light.png'; 

  return (
    <StyledLogo>
      <Img src={imgSource} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;