import React, { Fragment } from "react";
import "./index.css";

export default function Demo() {
  return (
    <Fragment>
      <div className="box1">1</div>
      <div className="box4">
        4
        <div className="box5">
          5<div className="box2">2</div>
        </div>
      </div>
      <div className="box3">3</div>
    </Fragment>
  );
}
