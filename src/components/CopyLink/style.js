import styled from "styled-components";
export const CopyLinkStyle = styled.div`
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

input[type=text] {
    border: 0;
    background-color: transparent;
    color: #fff;
    font-size: .9em;
    padding: 0.4em;
    width: 80%;
}

input[type=submit] {
    background-color: #1D99CE;
    border: 0;
    border-radius: 4px;
    color: #fff;
    float: right;
    padding: 0.5em;
    text-transform: uppercase;
    width: 4.5em;
}

.copy-link-container {
    width: 500px;
}

.copy-link-container:not(:first-of-type) {
    margin-top: 1em;
}

.copy-link {
    background-color: #1C7EAD;
    border-radius: 6px 6px 6px 6px;
    color: #fff;
    padding: .5em;
    overflow: hidden;
}

.copy-link-icon {
    position: relative;
    left: 10px;
    top: 15px;
}

.copy-link-inner {
background-color: #0E4257;
border: 0;
border-radius: 5px;
padding: 0.5em;
float: right;
width: 80%;
}

`;
