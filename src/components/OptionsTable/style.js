import styled from "styled-components";
export const Table = styled.div`
  margin-top: 15px;
  max-width: 100%;
  background-color: #fafafa;
  overflow: auto;
  max-height: 100px;
  th,
  td {
    text-align: left;
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
`;
