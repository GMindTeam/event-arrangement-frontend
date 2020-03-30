import styled from "styled-components";
import {theme} from "../../config/mainTheme";

export const Nav = styled("nav")`
  background-color: ${theme.mainColor1};
  color: white;
  font-family: ${theme.fontFamily};
  justify-content: space-evenly;
  flex-flow: row nowrap;
  align-items: center;
  
  .nav-link {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }
  a {
    color: white;
    font-size: 2.5vh;
    /* text-decoration: none; */
  }
`;
