import styled from "styled-components";
import {theme} from "../../config/mainTheme";
import { device } from "../../config/breakpoint"
export const Table = styled.div`
  margin-top: 15px;
  max-width: 100%;
  background-color: ${theme.backgroundColor2};
  @media ${device.mobile} { 
      font-size: 12px;
  }
  @media ${device.tablet} { 
    font-size: 14px;
  }
  th,
  td {
    text-align: left;
    width: 10%;
    border-top: 1px solid ${theme.dividerColor2};
    padding: 0.75em 1em;
    @media ${device.mobile} { 
      padding: 0.5em .25em;
  }
  @media ${device.tablet} { 
    padding: 0.75em 1em;
  }
    vertical-align: middle;
  }
`;
