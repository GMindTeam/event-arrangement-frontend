import styled from "styled-components";
import { theme } from "../../config/mainTheme";
import { device } from "../../config/breakpoint"
export const EventCard = styled.div`
@media ${device.mobile} { 
      width: 90%;
    }
    @media ${device.tablet} { 
      width: 75%;
    }
    @media ${device.laptop} { 
      width: 50%;
    }
    margin: auto;
    border-radius: 5px; 
    margin-top: 40px;
    margin-bottom: 10px;
    box-shadow: ${theme.boxShadow};
  .content{
    @media ${device.mobile} { 
      padding-left: .5em;
      padding-bottom: .5em;
    }
    @media ${device.tablet} { 
      padding-left: 1em;
    padding-bottom: 1em;
    }
    .eventName,
    .eventDescription {
      margin-left: 1rem;
      word-wrap: break-word;
    }
    .eventName{
      font-weight: 400;
    }
    .eventDescription {
      color: ${theme.gray};
    }
    .button{
      float:right;
      margin: 0em .5em 0em 0em;
    }
  }
`

export const Button = styled.button`
  background: white;
  color: ${theme.mainColor1};
  font-family: ${theme.fontFamily};
  @media ${device.mobile} { 
    font-size: 1em;
  }
  @media ${device.tablet} { 
    font-size: 1.2em;
  }
  @media ${device.laptop} { 
    font-size: 1.5em;
  }
  padding: 0.25em 1em;
  border: 2px solid  ${theme.mainColor1};
  border-radius: 3em;
  
  :hover {
    box-shadow: ${theme.buttonShadow};
  }
  :disabled{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  box-shadow: none;  
  }
  
`;
export const Title = styled.div`
  background-color: ${theme.backgroundColor3};
  border-bottom: 1px solid ${theme.dividerColor1};
  height: 3em;
  
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media ${device.mobile} { 
    font-size: 1em;
    margin-bottom: 0px;
  }
  @media ${device.tablet} { 
    font-size: 1.1em;
    margin-bottom: 30px;
  }
  @media ${device.laptop} { 
    font-size: 1.3em;
    
  }
  h3 {
    font-weight:100;
    line-height: 60px;
    padding-left: 1.5em;
    color: ${theme.mainColor1};
  }
`;
