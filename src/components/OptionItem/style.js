import styled from "styled-components";
import { theme } from "../../config/mainTheme";

export const Line = styled.div`
    display: flex;
    background-color: #ffffff;
    margin: 10px;
    input{
        width: 100%;
        padding: 10px;
        border: 1px solid ${theme.dividerColor1};
        box-sizing: border-box;
        resize: vertical;
        background-color: #ffffff;
    }
    button{
        border-top: 1px solid ${theme.dividerColor1};
        border-bottom: 1px solid ${theme.dividerColor1};
        border-right: none;
        border-left: none;
        float: right;
        display: none;
        background-color: #ffffff;
        cursor: pointer;
        width: 50px;
    }
    :hover {
        box-shadow: ${theme.boxShadow};
        button{
            display: inline;
            outline: none;
        }
        input {
            border-right: none;
        }
    }
    #trash:hover {
        box-shadow: ${theme.buttonShadow};
    }
    #edit:hover {
        box-shadow: ${theme.buttonShadow};
    }
`;