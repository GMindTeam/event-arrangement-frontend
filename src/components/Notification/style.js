import styled from "styled-components";
import { theme } from "../../config/mainTheme";
import { device } from "../../config/breakpoint"
export const Container = styled.div`
  background-color: ${theme.mainColor1};
  
  color:white;

  @media ${device.mobile} { 
    background-color: ${theme.mainColor1};
    opacity: 0.9;
    color: white;
    justify-content: center;
    text-align: center;
    width: 100%;
    position: initial;
  }
  @media ${device.tablet} { 
      width:10%;
      right:.5em;
      border-radius: 5px;
      position: absolute;
  }
  @media ${device.laptop} { 
      width:20%;
      right:4em;
      border-radius: 5px;
      position: absolute;
  }
  .row{
    @media ${device.mobile} { 
      width: 50%;
      margin: 0px auto;
    }
    @media ${device.laptop} { 
      width: 100%;
    }
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
      background-color: transparent;
    }
    @media ${device.laptop} { 
      background-color: #9c27b0;
      border-radius: 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      width: 15%;
    }
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    
  }
  .right{
    align-items: center;
    justify-content: left;
    float:right;
    width:85%;
    height: 70px;
    @media ${device.mobile} { 
        font-size: 13px;
        display: flex;
        h4{
          margin: 0px;
        }
    }
    @media ${device.tablet} { 
      font-size: 15px;
      display: none;
    }
    @media ${device.laptop} { 
      font-size: 15px;
      display: flex;
      h4{
          margin: auto
        }
    }
  }

`;
