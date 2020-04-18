import styled from "styled-components";
import { theme } from "../../config/mainTheme";
import { device } from "../../config/breakpoint"
export const CopyLinkStyle = styled.div`
  body {
    font-family: ${theme.fontFamily};
  }
  input {
    border: 0;
    background-color: transparent;
    color: white;
    font-size: .9em;
    width: 40%;
    height: 50px;
    font-size: 16px;
    @media ${device.mobile} { 
      display:none;
    }
    @media ${device.tablet} { 
      display:initial;
    }
  }
  button {
    background-color: white;
    border: 0;
    border-radius: 4px;
    color: ${theme.mainColor1};
    float: right;
    padding: 1.1em .5em;
    font-size: .95em;
    text-transform: uppercase;
    @media ${device.mobile} { 
      width: 100%;
    }
    @media ${device.tablet} { 
      width: 50%;
    }
  }
  .copy-link-container {
    width: 50%;
    float:right;
    margin-right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .copy-link-inner {
    background-color: ${theme.mainColor1};
    border: 0;
    border-radius: 5px;
    padding: .5rem;
    float: right;
    width: 100%;
  }

`;


const Container = styled.div`
  margin: auto;
  h3{
    @media ${device.mobile} { 
      line-height: 50px;
  }
  }
  background-color: ${theme.backgroundColor3};
  border-radius: 5px;
  margin-top: 50px;
  box-shadow: ${theme.boxShadow};
  @media ${device.mobile} { 
    max-width: 100%;
    border-radius: none;
    margin-top: 0px;
    box-shadow: none;
  }
  @media ${device.tablet} { 
    max-width: 75%;
    border-radius: 5px;
    margin-top: 50px;
    box-shadow: ${theme.boxShadow};
  }
  @media ${device.laptop} { 
    max-width: 50%;
    border-radius: 5px;
    margin-top: 50px;
    box-shadow: ${theme.boxShadow};
  }
  .text-input {
    height: 100px;
    width: 80%;
    margin-left: 5%;
  }
  .text {
    height: 30%;
    padding-top: 30px;
  }
  .eventName,
  .eventDescription {
    margin-left: 5%;
    margin-right: 5%;
    word-wrap: break-word;
  }
  .table {
    margin-left: 5%;
    margin-bottom: 0px;
    margin-right: 5%;
  }
  .groupButton {
    margin-top: 0px;
  }
  .countDown{
    margin-right:5%;
    float:right;
    font-weight:100;
    @media ${device.mobile} { 
    font-size: 9px;
    }
    @media ${device.tablet} { 
      font-size: 11px;
    }
    @media ${device.laptop} { 
      font-size: 13px;
    }
  }
`;

export { Container };
