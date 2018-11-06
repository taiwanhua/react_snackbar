import React, { PureComponent } from 'react';
import "./App.css";

export class Snackbar extends PureComponent {
  message = ''

  state = {
    isActive: false,
  }

  openSnackBar = (message = 'Something is wrong...') => {
    this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 3000);
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className = {isActive ? ["snackbar", "show"].join(" ") : "snackbar"}>
        {this.message}
      </div>
    )
  }
}