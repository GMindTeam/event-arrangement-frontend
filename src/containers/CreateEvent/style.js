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
    height: 100px;
    width: 80%;
    margin-left: 50px;
  }
  .text {
    height: 100%;
    padding-top: 30px;
  }
  .content {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  .react-datetime-picker {
    background-color: white;
  }
  .createButton {
    padding: 0.25em 1em;
    margin: 20px -50px;
    /* margin-bottom: 20px; */
    position: relative;
    /* top: 60%; */
    left: 50%;
    bottom: 10px;
  }
  .addButton {
    margin-left: 25px;
    color: ${props => (props.primary ? "white" : "#b042b4")};
  }

  .react-datetimerange-picker__inputGroup,
  .react-datetimerange-picker__range-divider,
  .react-datetimerange-picker__clear-button{
    display: none;
  }
  .react-datetimerange-picker__calendar-button__icon 
  .react-datetimerange-picker__button__icon {

  }
  .react-datetimerange-picker__calendar-button 
  .react-datetimerange-picker__button{

  }
  #warningName,
  #warningDescription,
  #warningOptions {
    color: red;
  }
  .sub-container {
    display: flex;
    height: 200px;
    width: 100%;
  }
  .right {
    width: 40%;
    height: 100%;
    margin-left: 10px;
  }
  .DateTimeRangePicker {
    width: 100%;
  }
  #options {
    height: 150px;
    overflow: auto;
  }
`;
const Title = styled("div")`
  background-color: white;
  align-items: center;
  border-bottom: 1px solid #ccc;
  height: 4em;
  margin-bottom: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h3 {
    text-align: center;
    line-height: 60px;
    color: #b042b4;
  }
`;
export { Container, Title, Button };
