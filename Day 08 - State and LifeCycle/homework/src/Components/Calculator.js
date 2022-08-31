import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1 : '',
      input2 : '',
      result : ''
    }
  }
  handleChange = (e) =>{
    this.setState({[e.target.name] : parseInt(e.target.value) }); //phải có [] ngoài e.target.name
    // [e.target.name] ở đây là name = name (vd:'input1') trong thẻ input, target là thẻ input hiện đang active
  }
  handleClick = (e) => {
    var resultCal= 0;
    switch (e) {
      case "+":
        resultCal  = this.state.input1 + this.state.input2// this.setState phải theo cú pháp This.setState({})
        break;
      case "-":
        resultCal  = this.state.input1 - this.state.input2
        break;
      case "*":
        resultCal  = this.state.input1 * this.state.input2
        break;
      case "/":
        // if (this.state.input2 === ''|| this.state.input2 === 0) {
        //   resultCal = this.state.input1 
        //   break;
        // }
        resultCal  = (this.state.input1 / this.state.input2).toFixed(2)
        break;
      default:
        resultCal = 0
        break;
    }
    this.setState({ result: resultCal });
  };
  render() {
    return (
        <div className="container">
          <div className="form">
            < Input type="number" value={this.state.input1} name="input1" placeholder="0" onChange={this.handleChange}/>
            < Input type="number" value={this.state.input2} name="input2" placeholder="0" onChange={this.handleChange}/>
            <p>Result: {this.state.result}</p>
            <Button className="btn 1" title="+" onClick={() =>this.handleClick("+")} />
            <Button className="btn 2" title="-" onClick={() =>this.handleClick("-")} />
            <Button className="btn 3" title="*" onClick={() =>this.handleClick("*")} />
            <Button className="btn 4" title="/" onClick={() =>this.handleClick("/")} />
            </div>
        </div>
    );
  }
}
export default Calculator;
