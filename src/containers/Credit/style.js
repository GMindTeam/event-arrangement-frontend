import styled from "styled-components";
import {theme} from "../../config/mainTheme";

export const Container = styled("div")`
  background-color: ${theme.backgroundColor2};
  justify-self: center;
  position: relative;
  width: 80%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  h1 {
    color: ${theme.mainColor1};
    font-family: ${theme.fontFamily};
    text-align: center;
    font-weight: 700;
  }
  h3,
  h4 {
    font-family: ${theme.fontFamily};
    text-align: center;
    font-weight: 300;
    padding: 10px;
  }

  .one {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .two {
    grid-column: 3 / 4;
    grid-row: 1;
  }
  .cowell {
    max-width: 15em;
    box-shadow: ${theme.buttonShadow};
  }
`;
