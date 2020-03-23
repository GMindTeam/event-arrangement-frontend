import styled from "styled-components";
const Button = styled.button`
  background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  border: 2px solid #b042b4;
  border-radius: 3em;
  display: block;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
  }
  height: 30%;
`;

const Container = styled("div")`
  justify-self: center;
  position: relative;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 0px;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    border: 1px solid #ccc;
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
    display: none;
    color: red;
  }
  .groupButton{
    padding: 1px;
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
`;
export { Button, Title, Container };
