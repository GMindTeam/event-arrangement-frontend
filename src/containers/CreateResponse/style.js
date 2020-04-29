import styled from "styled-components";
import { device } from "../../config/breakpoint"
import { theme } from "../../config/mainTheme"
const Container = styled.div`
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: ${theme.fallbackColor};
  background-color: ${theme.blackOpacity};
  .required{
    display: contents;
    color:red;
  }
  .modal-content {
    justify-self: center;
    position: relative;
    width: 50%;
    margin: auto;
    border-radius: 5px;
    background-color: ${theme.backgroundColor3};
    padding: 0px;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: ${theme.boxShadow};
    @media ${device.mobile} { 
      width: 95%;
    }
    @media ${device.tablet} { 
      width: 75%;
    }
    @media ${device.laptop} { 
      width: 50%;
    }
  }
  h2{
    margin-left: 20px;
    @media ${device.mobile} { 
      line-height: 50px;
    }
      @media ${device.tablet} { 
        line-height: 65px;
    }
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
    margin-left: 5%;
    margin-right: 5%;
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
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .subButton {
    padding: 0.25em 1em;
  }
  .table {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5px;
    padding-top:30px;
  }
  #warningName,
  #warningComment,
  #warningOption {
    color: red;
    font-size: 13px;
  }
  #warningOption {
    margin-left: 5%;
    margin-right: 5%;
  }
  .groupButton{
    text-align:center;
    height: 3.7em;
  }


 
`;

export { Container };
