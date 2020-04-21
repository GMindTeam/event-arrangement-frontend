import React from "react";

import { Container } from "./style";

function Credit() {

  return (
    <Container>
      <div className="one">
        <h1>Thông tin</h1>
        <h3>Website tạo bởi</h3>
        <h4>Nguyễn Quốc Duy</h4>
        <h4>Nguyễn Thị Minh Phương</h4>
      </div>
      <div className="two">
        <img className="cowell" alt="Co-Well" src={require("../../images/cowell.jpg")} />
      </div>
    </Container>
  );
}

export default Credit;
