import React, { Component } from "react";
import Expand from "./Expand";

class ConditionalRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogIn = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) return <Expand onLogOut={this.handleLogOut} />;
    return (
      <div style={{ textAlign: "left" }}>
        <div>
          <h1
            style={{
              textAlign: "center",
              backgroundColor: "green",
              padding: 10,
              width: "100%",
              height: 80,
              margin: "auto",
            }}
          >
            Conditional Rendering
          </h1>
          <button onClick={this.handleLogIn}>{isLoggedIn ? 'Mở giới thiệu' : 'Đóng giới thiệu'}</button>
        </div>
      </div>
    );
  }
}

export default ConditionalRender;
