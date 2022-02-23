import { render } from "@testing-library/react";
import React from "react";

class SaveButton extends React.Component {
  constructor() {
    super();
    this.state = { name: "Data is Loading", project: "" };
  }

  udpateData1 = (event) => {
    this.setState({ name: event.target.value });
  };

  udpateData2 = (event) => {
    this.setState({ project: event.target.value });
  };

  showData = (event) => {
    document.getElementById("demo1").innerHTML = this.state.name;
    document.getElementById("demo2").innerHTML = this.state.project;
  };
  render() {
    return (
      <div>
        <label> Name </label>
        <input type="text" onChange={this.udpateData1}></input>
        <br></br>
        <label> Project </label>
        <input type="text" onChange={this.udpateData2}></input>
        <br></br>
        <button onClick={this.showData}> Save </button>
        <p id="demo1"></p>
        <p id="demo2"></p>
      </div>
    );
  }
}

export default SaveButton;
