import styled from "styled-components";
import { theme } from "../../config/mainTheme";


export const EventCard = styled.div`

    width: 50%;
    margin: auto;
    border-radius: 5px; 
    margin-top: 50px;
    box-shadow: ${theme.boxShadow};
  .content{
    padding-left: 1em;
    padding-bottom: 1em;
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
      margin:.9rem 1rem;
    }
  }
`
export const Button = styled.button`
  background: white;
  color: ${theme.mainColor1};
  font-family: ${theme.fontFamily};
  font-size: 1.5em;
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
export const Title = styled("div")`
  background-color: ${theme.backgroundColor3};
  border-bottom: 1px solid ${theme.dividerColor1};
  height: 3em;
  margin-bottom: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h3 {
    font-weight:100;
    line-height: 60px;
    padding-left: 2rem;
    color: ${theme.mainColor1};
  }
`;
