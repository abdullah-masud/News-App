import React, { Component } from "react";
import spinner from "./ajax-loader.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center ">
        <img src={spinner} alt="" />
      </div>
    );
  }
}

export default Spinner;
