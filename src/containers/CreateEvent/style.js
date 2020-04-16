import styled from "styled-components";
import { theme } from "../../config/mainTheme"

const Container = styled.div`
  justify-self: center;
  position: relative;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  background-color: ${theme.backgroundColor3};
  padding: 0px;
  margin-top: 50px;
  box-shadow: ${theme.boxShadow};
  .text-input {
    height: 100px;
    width: 80%;
    position: relative;
    left: 10%
  }
  .text {
    height: 100%;
    padding-top: 30px;
  }
  .content {
    width: 100%;
    padding: 12px;
    border: 1px solid ${theme.dividerColor1};
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
    margin-top:100px;
    /* margin-bottom: 20px; */
    position: relative;
    /* top: 60%; */
    left: 50%;
    bottom: 10px;
  }
  .addButton {
    margin-left: 25px;
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
  .warning {
    color: red;
  }
  .sub-container {
    display: flex;
    height: 200px;
    width: 100%;
  }
  .sub {
    width:80%;
    display: flex;
    position: relative;
    left: 2%;
  }
  .left {
    width:100%;
  }
  .right {
    width: 60%;
    position: relative;
    left: 20%;
  }
  .calendar {
    float:right;
    margin-top: -80px;
    margin-right: -5%;
  }
  .DateTimeRangePicker {
    width: 100%;
  }
`;

export { Container };
