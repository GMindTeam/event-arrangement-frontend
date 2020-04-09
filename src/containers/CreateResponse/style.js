import styled from "styled-components";
import { theme } from "../../config/mainTheme"
const Container = styled.div`
  position: fixed;
  z-index: 1; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: ${theme.fallbackColor};
  background-color: ${theme.blackOpacity};
  .modal-content {
    justify-self: center;
    position: relative;
    width: 50%;
    margin: auto;
    border-radius: 5px;
    background-color: ${theme.backgroundColor3};
    padding: 0px;
    margin-top: 50px;
    box-shadow: ${theme.boxShadow};
  }
  .close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-right: 9px;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  .text-input {
    margin-left: 50px;
    margin-right: 50px;
    padding-top:30px;
  }
  .text {
    height: 30%;
    margin-top: 30px;
  }
  .content {
    width: 100%;
    padding: 12px;
    border: 1px solid ${theme.dividerColor1};
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  .subButton {
    padding: 0.25em 1em;
    display: block;
    margin: 15px auto;
  }
  .table {
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 10px;
    padding-top:30px;
  }
  #warningName,
  #warningComment,
  #warningOption {
    color: red;
  }
  #loading{
    position: absolute;
    margin-top: -40px;
    margin-left: 55%;
  }
  .groupButton{
    padding: 1px;
  }
`;

export { Container };
