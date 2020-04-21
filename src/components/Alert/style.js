import styled from "styled-components";
import { theme } from "../../config/mainTheme"
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
    width: 20%;
    text-align: center;
    margin: auto;
    border-radius: 5px;
    background-color: ${theme.backgroundColor3};
    padding: 2rem;
    margin-top: 75px;
    box-shadow: ${theme.boxShadow};
    color: ${theme.textColorGray}

  }
  .btn:hover{
      box-shadow: ${theme.buttonShadow};
      
  }
  .btn{
      
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
    padding: .5em 2.5em;
    margin-right: 2rem;
    background: ${theme.dividerColor1};
      
  }
  .btnNo{
    margin: 0em;
    padding: .5em 2.5em;
    
    background: ${theme.warningColor}

  }
  
`;

export { Container };
