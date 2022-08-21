import React, { Fragment } from "react";
import "./index.css";

export default function Demo() {
  return (
    <Fragment>
      {/* 演示 float */}
      {/* <div className="box1"></div>
      <div className="box2"></div> */}

      {/* 演示父子元素的mt */}
      <div className="outer">
        <div className="inner"></div>
      </div>
    </Fragment>
  );
}
