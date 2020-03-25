import React from "react";
import { Container } from "./style";

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
        <img className="cowell" src={require("../../images/cowell.jpg")} />
      </div>
    </Container>
  );
}

export default Credit;
