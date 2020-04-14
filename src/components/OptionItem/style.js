import styled from "styled-components";
import { theme } from "../../config/mainTheme";

export const Line = styled.div`
display: flex;
background-color: #f2f2f2;
input{
    border: none;
}
button{
    border: none;
    float: right;
    display: none;
}
:hover {
    button{
        display: inline;
    }
}
#trash:hover {
    box-shadow: ${theme.buttonShadow};
}
#edit:hover {
    box-shadow: ${theme.buttonShadow};
}
`;