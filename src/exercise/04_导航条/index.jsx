import React, { Fragment } from "react";
import "./index.css";

export default function Demo() {
  return (
    <Fragment>
      <ul className="navbar">
        <li>
          <a href="/">HTML/CSS</a>
        </li>
        <li>
          <a href="/">Browser Side</a>
        </li>
        <li>
          <a href="/">Server Side</a>
        </li>
        <li>
          <a href="/">Programming</a>
        </li>
        <li>
          <a href="/">XML</a>
        </li>
        <li>
          <a href="/">Web Building</a>
        </li>
        <li>
          <a href="/">Reference</a>
        </li>
      </ul>
    </Fragment>
  );
}
