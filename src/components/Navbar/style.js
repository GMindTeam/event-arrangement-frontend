import styled from "styled-components";

export const Nav = styled("nav")`
  background-color: #b042b4;
  color: #fff;
  font-family: sans-serif;
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
    font-size: 2.5vh;
    /* text-decoration: none; */
  }
`;
export const Button = styled.button`
  background: white;
  color:  #b042b4;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  margin-right: 5em;
  border: 2px solid #b042b4;
  border-radius: 3em;
  float: right;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
  }
`;