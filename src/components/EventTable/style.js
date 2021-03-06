import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.primary ? "#b042b4" : "white")};
  color: ${props => (props.primary ? "white" : "#b042b4")};
  font-size: 1em;
  margin: 1em 3em;
  padding: 0.25em 1em;
  margin-right: 5em;
  border: 2px solid #b042b4;
  border-radius: 3em;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Table = styled.div`
  margin-top: 15px;
  max-width: 90%;
  background-color: #fafafa;
  th,
  td {
  }
  th,
  td {
    text-align: left;
    /* padding: 10px; */
    width: 10%;
  }
  tr:nth-child(odd) {
    background-color: #fafafa;
  }
  tr:nth-child(even) {
    background-color: #fafafa;
  }
  tr:nth-child(1) {
    background-color: white;
  }
  .groupResponseButton {
    background: ${props => (props.primary ? "#b042b4" : "white")};
    color: ${props => (props.primary ? "white" : "#b042b4")};
    font-size: 1em;
    border-radius: 3em;
    margin: 0.1em 0.1em;
    float: left;
    :hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 3px 3px 0 rgba(0, 0, 0, 0.19);
    }
  }
  #editResponseButton {
    background-color: #00c851;
    border: 0px solid #9c27b0;
    color: white;
    padding: 0.1em 1em;
  }
  #deleteResponseButton {
    background-color: #ff3547;
    border: 0px solid #9c27b0;
    color: white;
    padding: 0.1em 1em;
  }
`;

export { Button, Table };
