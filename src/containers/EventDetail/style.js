import styled from "styled-components";
export const CopyLinkStyle = styled.div`
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

input {
    border: 0;
    background-color: transparent;
    color: #fff;
    font-size: .9em;
    padding: 0.4em;
    width: 80%;
}

button {
  background-color: #fff;
    border: 0;
    border-radius: 4px;
    color: #b042b4;
    float: right;
    padding: 0.5em;
    text-transform: uppercase;
    width: 5em;
}

.copy-link-container {
    width: 500px;
    float:right;
    margin-right: 50px;
}

.copy-link-container:not(:first-of-type) {
    margin-top: 1em;
}

.copy-link {
    background-color: #1C7EAD;
    border-radius: 6px 6px 6px 6px;
    color: #fff;
    padding: .5em;
    overflow: hidden;
}

.copy-link-icon {
    position: relative;
    left: 10px;
    top: 15px;
}

.copy-link-inner {
background-color: #b042b4;
border: 0;
border-radius: 5px;
padding: 0.5em;
float: right;
width: 80%;
}

`;

const Button = styled.button`
  background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  margin: 1em 3em;
  padding: 0.25em 1em;
  margin-right: 5em;
  border: 2px solid #b042b4;
  border-radius: 3em;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Container = styled("div")`
  width: 50%;
  margin: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
  .content {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    margin-top: 10px;
    background-color: white;
  }
  .subButton:hover {
    background-color: #810785;
  }
  .table {
    margin-left: 50px;
    margin-bottom: 0px;
    margin-right: 50px;
  }
  .groupButton {
    margin-top: 0px;
  }
`;

const Title = styled("div")`
  background-color: white;
  align-items: center;
  border-bottom: 1px solid #ccc;
  height: 4em;
  
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h3 {
    text-align: center;
    line-height: 60px;
    color: #b042b4;
  }
  margin-bottom: 20px;
`;
export { Button, Container, Title };
