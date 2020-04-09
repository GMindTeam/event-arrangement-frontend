import styled from "styled-components";
import { theme } from "../../config/mainTheme";

export const Container = styled.div`
  background-color: ${theme.mainColor1};
  width:15%;
  position: absolute;
  right:5rem;
  color:white;
  border-radius: 5px;
  
  box-shadow: ${theme.boxShadow};
  .row:after {
  content: "";
  display: table;
  clear: both;
  }
  .left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    float: left;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9c27b0;
    height: 70px;
  }
  .right{
    display: flex;
    align-items: center;
    justify-content: left;
    float:right;
    width:85%;
    height: 70px;
  }
  h4{
    padding-left: 1em;
  }
`;
