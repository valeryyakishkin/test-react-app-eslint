/* eslint-disable import/no-extraneous-dependencies */
import { Component } from "react";

export default class InputUserName extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleInput = (event) => {
    const val = event.target.value;
    this.setState({
      text: val,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleInput} value={text} />
      </div>
    );
  }
}
