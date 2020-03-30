import styled from "styled-components";
import {theme} from "../../config/mainTheme";
export const Table = styled.div`
  margin-top: 15px;
  max-width: 100%;
  background-color: ${theme.backgroundColor2};
  th,
  td {
    text-align: left;
    width: 10%;
    border-top: 1px solid ${theme.dividerColor2};
    padding: 0.75em 1em;
    vertical-align: middle;
  }
`;
