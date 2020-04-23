import styled from "styled-components";
import { theme } from "../../config/mainTheme";
import { device } from "../../config/breakpoint"
export const Title = styled.div`
  background-color: white;
  align-items: center;
  border-bottom: 1px solid ${theme.dividerColor1};
  height: 4em;
  margin-bottom: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
   h2{
    text-align: center;
    @media ${device.mobile} { 
      line-height: 40px;
    }
    @media ${device.tablet} { 
      line-height: 60px;
    }
    color: ${theme.mainColor1};
  }
`;
