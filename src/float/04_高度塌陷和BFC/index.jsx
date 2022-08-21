import React, { Fragment } from "react";
import "./index.css";

export default function Demo() {
  return (
    <Fragment>
      <div className="outer">
        <div className="inner"></div>
      </div>
      <div
        style={{ width: "100px", height: "100px", background: "yellow" }}
      ></div>
    </Fragment>
  );
}
