import styled from "styled-components";
import { theme } from "../../config/mainTheme";
import { device } from "../../config/breakpoint"
export const Button = styled.button`
  background: white;
  color: ${theme.mainColor1};
  font-family: ${theme.fontFamily};
  @media ${device.mobile} { 
    font-size:13px;
  }
  @media ${device.tablet} { 
    font-size:16px;
  }
  margin: 2% 5%;
  padding: 0.4em 1em;
  border: 2px solid  ${theme.mainColor1};
  border-radius: 3em;
  :hover {
    box-shadow: ${theme.buttonShadow};
  }
  :disabled{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  box-shadow: none;  
  }
  cursor: pointer;
`;
