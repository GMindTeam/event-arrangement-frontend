import styled from "styled-components";
import {theme} from '../../config/mainTheme'

const Table = styled.div`
  margin-top: 15px;
  max-width: 100%;
  white-space:nowrap;
  overflow-x:scroll;
  background-color: ${theme.backgroundColor2};
  th,
  td {
    text-align: left;
    width: 10%;
    border-top: 1px solid ${theme.dividerColor2};
    padding: 0.75em 1.4em;
    vertical-align: middle;
  }

  #editResponseButton {
    background-color: ${theme.themeColor1};
    
  }
  #deleteResponseButton {
    background-color:  ${theme.themeColor2};
  
  }
`;

export { Table };
 