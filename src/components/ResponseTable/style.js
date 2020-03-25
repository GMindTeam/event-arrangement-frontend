import styled from "styled-components";
export const Table = styled.div`
  margin-top: 15px;
  max-width: 1000%;
  background-color: #fafafa;
  th,
  td {
    text-align: left;
    width: 10%;
    border-top: 1px solid #dee2e6;
    padding: 0.75em 1em;
    vertical-align: middle;
  }
  .responseContent{
    
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
