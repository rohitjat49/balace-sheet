import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    console.log("LIFECYCLE :: constructor");
    super(props);

    this.state = {
      name: "RISHABH",
    };
  }

  render() {
    return (
      <>
        <div className="">
          <h1>HELLO {this.state.name}</h1>

          <button
            onClick={() => {
              this.setState({ name: "ANKUSH" });
            }}
          >
            CLICK{" "}
          </button>
        </div>
      </>
    );
  }

  shouldComponentUpdate(props, state) {
    console.log("LIFECYCLE ::: shouldComponentUpdate", props, state);
    return true;
  }

  componentDidUpdate() {
    console.log("LIFECYCLE :::  componentDidUpdate");
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("LIFECYCLE ::: getSnapshotBeforeUpdate", preProps, preState);
  }

  componentDidMount() {
    console.log("LIFECYCLE ::: componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LIFECYCLE ::: getDerivedStateFromProps", props, state);
  }
}
