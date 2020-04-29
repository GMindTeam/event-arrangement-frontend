import styled from "styled-components";
import {theme} from "../../config/mainTheme";
export const Button = styled.button`
background: white;
    font-size: 1em;
    border-radius: 3em;
    margin: 0.1em 0.1em;
    color: white;
    padding: 0.1em 1em;
    border: none;
  :hover {
    box-shadow: ${theme.buttonShadow};
  }
  .svg-inline--fa.fa-w-16 {
    color: #00CC00;
    font-size: 20px;
  }
  .svg-inline--fa.fa-w-11 {
    color: #FF3300;
    font-size: 20px;
  }
  .svg-inline--fa.fa-w-12 {
    font-size: 20px;
  }
`;
