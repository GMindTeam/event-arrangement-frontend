import styled from "styled-components";
import {theme} from "../../config/mainTheme";
import { device } from "../../config/breakpoint"
export const Nav = styled.nav`
  background-color: ${theme.mainColor1};
  color: white;
  font-family: ${theme.fontFamily};
  justify-content: space-evenly;
  flex-flow: row nowrap;
  align-items: center;
  .nav-link {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }
  a {
    color: white;
  }
  .credit{
    @media ${device.mobile} { 
    display: none;
    }
    @media ${device.tablet} { 
      display: inherit;
    }
    @media ${device.laptop} { 
      display: inherit;
    }
  }
  .logo{
    @media ${device.mobile} { 
      margin-left:-30px;
      height:40px;
    }
    @media ${device.tablet} { 
      margin-left:0px;
      height:auto;
    }


  }
  .btn{
    
    @media ${device.mobile} { 
      width: 120px;
    }
    @media ${device.tablet} { 
      width: 160px;
    }
  }
`;
