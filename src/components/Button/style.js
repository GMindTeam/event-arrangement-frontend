import styled from "styled-components";
import { theme } from "../../config/mainTheme";

export const Button = styled.button`
  background: white;
  color: ${theme.mainColor1};
  font-family: ${theme.fontFamily};
  font-size: 1em;
  margin: .5em 3em;
  padding: 0.25em 1em;
  margin-right: 5em;
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
`;
