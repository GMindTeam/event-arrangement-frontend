import styled from "styled-components";
import { theme } from "../../config/mainTheme";
import { device } from "../../config/breakpoint"
export const Container = styled.div`
  background-color: ${theme.mainColor1};
  position: absolute;
  color:white;
  @media ${device.mobile} { 
      display:none;
  }
  @media ${device.tablet} { 
      display:initial;
      width:10%;
      right:1em;
      border-radius: 100px;
  }
  @media ${device.laptop} { 
      display:initial;
      width:20%;
      right:4em;
      border-radius: 5px;
  }
  box-shadow: ${theme.boxShadow};
  .row:after {
  content: "";
  display: table;
  clear: both;
  }
  .left {
    @media ${device.tablet} { 
      border-radius: 100px;
      width: 100%;
    }
    @media ${device.laptop} { 
      border-radius: 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      width: 15%;
    }
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9c27b0;
    height: 70px;
    
  }
  .right{
    display: flex;
    align-items: center;
    justify-content: left;
    float:right;
    h4{
      margin-top: 25px;
    }
    width:85%;
    height: 70px;
    @media ${device.tablet} { 
        display:none;
    }
    @media ${device.laptop} { 
        display:initial;
    }
  }

`;
export const ContainerMobile = styled.div`
  position: fixed;
  top:0px;
  left:0px;
  width: 100%;
  height: 100%;
  -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    justify-content: center;
  background-color : white;
    @media ${device.mobile} { 
      display: -webkit-flexbox;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
    }
    @media ${device.tablet} { 
      display:none;
    }
    @media ${device.laptop} { 
        display:none;
    }
    .item{
      position:absolute;
      top:35%;
      margin:auto;
      text-align:center;
      align-self:center;
    }
    .message{
      color: ${theme.textColorGray};
    }
`;
