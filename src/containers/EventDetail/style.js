import styled from "styled-components";
import {theme} from "../../config/mainTheme";
export const CopyLinkStyle = styled.div`
* {
    box-sizing: border-box;
}

body {
  font-family: ${theme.fontFamily};
}
input {
  border: 0;
    background-color: transparent;
    color: white;
    font-size: .9em;
    padding: 0.6em;
    width: 70%;
    height: 50px;
    font-size: 16px;
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
    width: 10em;
}

.copy-link-container {
    width: 550px;
    float:right;
    margin-right: 50px;
}

.copy-link-container:not(:first-of-type) {
    margin-top: 1em;
}

.copy-link {

    border-radius: 6px 6px 6px 6px;
    color: white;
    padding: .5em;
    overflow: hidden;
}

.copy-link-icon {
    position: relative;
    left: 10px;
    top: 15px;
}

.copy-link-inner {
background-color: ${theme.mainColor1};
border: 0;
border-radius: 5px;
padding: 0.5em;
float: right;
width: 100%;
}

`;


const Container = styled.div`
  width: 50%;
  margin: auto;
  border-radius: 5px;
  background-color: ${theme.backgroundColor3};
  margin-top: 50px;
  box-shadow: ${theme.boxShadow};

  .text-input {
    height: 100px;
    width: 80%;
    margin-left: 50px;
  }
  .text {
    height: 30%;
    padding-top: 30px;
  }
  .eventName,
  .eventDescription {
    margin-left: 50px;
    margin-right: 50px;
    word-wrap: break-word;
  }
  .table {
    margin-left: 50px;
    margin-bottom: 0px;
    margin-right: 50px;
  }
  .groupButton {
    margin-top: 0px;
  }
  .countDown{
    margin-right:50px;
    float:right;
  }
`;

export { Container };
