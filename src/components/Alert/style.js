import styled from "styled-components";
import { theme } from "../../config/mainTheme"
import { device } from "../../config/breakpoint"
const Container = styled.div`
  position: fixed;
  z-index: 1; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: ${theme.fallbackColor};
  background-color: ${theme.blackOpacity};
  .modal-content {
    justify-self: center;
    position: relative;

    @media ${device.mobile} { 
      width: 70%;
      margin-top: 10px;
    }
    @media ${device.tablet} { 
      width: 50%;
      margin-top: 30px;
    }
    @media ${device.laptop} { 
      width: 30%;
      margin-top: 75px;
    }
    text-align: center;
    margin: auto;
    border-radius: 5px;
    background-color: ${theme.backgroundColor3};
    padding: 2rem;
    box-shadow: ${theme.boxShadow};
    color: ${theme.textColorGray}

  }
  .btn:hover{
      box-shadow: ${theme.buttonShadow};
      
  }
  .btn{
    @media ${device.mobile} { 
      padding: .5em .75em;
    }
    @media ${device.tablet} { 
      padding: .5em 2.5em;
    }
    @media ${device.laptop} { 
      padding: .5em 2.5em;
    }
      border:none;  
      border-radius: 3em;
  }
  .title{

  }
  .description{

  }
  .btnYes{
    float:right;
    margin: 0em;
    background: ${theme.dividerColor1};
    @media ${device.mobile} { 
      margin-right: 0.5rem;
    }
    @media ${device.tablet} { 
      margin-right: 2rem;
    }
    @media ${device.laptop} { 
      margin-right: 4rem;
    }

      
  }
  .btnNo{
    margin: 0em;
    background: ${theme.warningColor}

  }
  
`;

export { Container };
