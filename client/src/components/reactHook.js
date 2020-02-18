import React, { Component } from "react";

export default class Button extends Component {
  state = { buttonText: "Click me, please" };

  handleClick = () => {
    this.setState(() => {
      return { buttonText: "Thanks, been clicked!" };
    });
  };

  render() {
    const { buttonText } = this.state;
    return <button onClick={this.handleClick}>{buttonText}</button>;
  }
}

import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Click me, please");

  return (
    <button onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
  );
}