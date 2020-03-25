import styled from "styled-components";
export const Table = styled.div`
  max-height: 150px;
  width: 80%;
  margin-left: 50px;
  background-color: #fafafa;
  overflow: auto;

  th,
  td {
    text-align: left;
    width: 10%;
    border-top: 1px solid #dee2e6;
    padding: 0em 1em;
  }
  .optionContent{
    
    padding: 0.75em 0em;

  }
  th{
    padding: 0.75em 1em;
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
`;
