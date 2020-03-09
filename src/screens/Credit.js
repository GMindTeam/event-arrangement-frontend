import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components/macro";

const Container = styled("div")`
  background-color: #fafafa;
  justify-self: center;
  position: relative;
  width: 80%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  h1 {
    color: #b042b4;
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: 700;
  }
  h3,h4{
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: 300;
    padding: 10px;
  }


  .one {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .two {
    grid-column: 3 / 4;
    grid-row: 1;
  }
  .cowell {
    max-width: 15em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

function Credit() {
  return (
    <Container>
      <div className="one">
        <h1>Credit</h1>
        <h3>Create by</h3>
        <h4>Nguyen Quoc Duy</h4>
        <h4>Nguyen Thi Minh Phuong</h4>
      </div>
      <div className="two">
        <img className="cowell" src={require("../images/cowell.jpg")} />
      </div>
    </Container>
  );
}

export default Credit;
