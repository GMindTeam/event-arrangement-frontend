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
  textarea{
    font-family: ${theme.fontFamily};
  }
  .required{
    display: contents;
    color:red;
  }

  @media ${device.mobile} { 
    max-width: 100%;
    border-radius: none;
    margin-top: 0px;
    box-shadow: none;
    min-height:90vh;
  }
  @media ${device.tablet} { 
    max-width: 75%;
    border-radius: 5px;
    margin-top: 50px;
    box-shadow: ${theme.boxShadow};
    min-height:auto;
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
  .guide-option{
    border: none;
    position: absolute;
    top: 0px;
    right: 15px;
  }
  .guide-calendar{
    border: none;
    position: absolute;
    top: 92px;
    right: 15px;
  }
  .guide-modal-option{
        display: none;
        background-color: white;
        font-size: 11px;
        width: 42%;
        position: absolute;
        right: 23px;
        padding: 1em 2em;
        padding-left: 0px;
        z-index:1;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border: 2px solid ${theme.mainColor1};
        box-shadow: ${theme.boxShadow};
      }
  .guide-modal-calendar{
        display: none;
        background-color: white;
        font-size: 11px;
        width: 50%;
        position: absolute;
        right: 23px;
        top: 110px;
        padding: 1em 2em;
        padding-left: 0px;
        z-index:1;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border: 2px solid ${theme.mainColor1};
        box-shadow: ${theme.boxShadow};
        text-align: left;
      }
  .icon-question{
    box-shadow : ${theme.buttonShadow};
    border-radius: 14px;
  

    
  }
  .guide-option:hover+.guide-modal-option {
    display: block;
  }
  .guide-calendar:hover+.guide-modal-calendar {
    display: block;
  }
  .react-datetimerange-picker__calendar-button__icon 
  .react-datetimerange-picker__button__icon
  {
    color: ${theme.mainColor1}
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
    background-color: #ab47bc;
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
  .wrapper-content {
    display: flex;
  }
  .wrapper-button {
    border: none;
    outline: none;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
  .btn-add{
    background-color: ${theme.mainColor3};
    border: 2px solid  ${theme.mainColor1};
    border-radius: 100px;
    font-size: 15px;
    height: 33px;
    width: 33px;
    position: absolute;
    top: 32px;
    right: 4px;
    :hover{
      box-shadow: ${theme.buttonShadow};
    }
  }
  .option-input{
    border-top-right-radius: 21px;
    border-bottom-right-radius: 21px;
  }
  #description {
    height: 100px;
    ::-webkit-input-placeholder {
      font-size: 13px;
      font-family: ${theme.fontFamily};
      position: relative;
    }
  }
  .subtitle {
    width: 100%;
    font-size: 13px;
  }
`;

export { Container };
