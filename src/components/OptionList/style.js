import styled from "styled-components";
import { theme } from "../../config/mainTheme";

export const List = styled.div`
    margin-top: 15px;
    max-width: 100%;
    max-height: 200px;
    white-space:nowrap;
    overflow-y: scroll;
    border: 2px solid ${theme.mainColor1};
    box-sizing: border-box;
    border-radius: 5px;
    // background-color: ${theme.backgroundColor2};
`;