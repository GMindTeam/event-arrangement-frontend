import styled from "styled-components";
import { theme } from "../../config/mainTheme"
import { device } from "../../config/breakpoint"


const Container = styled.div`
  justify-self: center;
  position: relative;
  margin: auto;
  border-radius: 5px;
  background-color: ${theme.backgroundColor3};
  padding: 0px;
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
  }
  .text-input {
    width: 90%;
    position: relative;
    left: 5%;
    margin-bottom: 10px;
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
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .react-datetime-picker {
    background-color: white;
  }
  .createButton {
    padding: 0.25em 1em;
    bottom: 10px;
    margin-top: 15px;
  }
  .react-datetimerange-picker__inputGroup,
  .react-datetimerange-picker__range-divider,
  .react-datetimerange-picker__clear-button{
    display: none;
  }
  .react-datetimerange-picker__calendar-button,
  .react-datetimerange-picker__button{
    background: 'white';
  }
  .react-datetimerange-picker__wrapper {
    display: flex;
    border: 2px solid #9c27b0;
    border-radius: 3em;
    padding: 0.2em 1em;
  }
  .warning {
    color: red;
    font-size: 13px;
  }
  .btn{
    text-align:center;
  }
  .sub-container {
    height: 200px;
    width: 100%;
  }
  .sub {
    width:100%;
    position: relative;
  }
  .right {
    @media ${device.mobile} { 
        position: relative;
        width: 80%;
        left: 10%;
    }
    @media ${device.tablet}{
        width: 60%;
        left: 20%;
    }
  }
  .wrapper {
      text-align: center;
      padding-top: 10px;
  }
  .calendar {
  }
  .DateTimeRangePicker {
  }
`;

export { Container };
