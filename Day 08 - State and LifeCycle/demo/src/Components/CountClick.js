import React from "react";
import Button from "./Button";

class CountClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = (e) => {
    switch (e) {
      case "-":
        this.setState({ count: this.state.count - 1 }); // this.setState phải theo cú pháp This.setState({})
        break;
      case "+":
        this.setState({ count: this.state.count + 1 }); //
        break;
      default:
        this.setState({ count: 0 });
        break;
    }
  };
  render() {
    return (
      <div style={{ textAlign: "center", padding: 30 }}>
        <Button title="tang" onClick={() =>this.handleClick("+")} />
        <span style={{ padding: 10 }}>{this.state.count}</span>
        <Button title="giam" onClick={() =>this.handleClick("-")} />
      </div>
      
    );
  }
increase = () => {
   this.setState({ count: this.state.count + 1 });
 };
 decrease = () => {
   this.setState({ count: this.state.count - 1 });
 };

//  render() {
//    return (
//      <div style={{ textAlign: "center", padding: 30 }}>
//        <button onClick={this.decrease}>Decrease</button>
//        <span style={{ padding: 10 }}>{this.state.count}</span>
//        <button onClick={this.increase}>Increase</button>
//      </div>
//    );
//  }
}
export default CountClick;
