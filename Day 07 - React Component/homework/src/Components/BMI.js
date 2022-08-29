import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";


class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height : '',
      weight : '',
      bmi : 0
    }
  }
  handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value }); //phải có [] ngoài e.target.name
    // [e.target.name] ở đây là name = name (vd:'height') trong thẻ input, target là thẻ input hiện đang active
  }
  check = (e) =>{
    e.preventDefault(); // ngăn không cho trang hiện tại gửi thông tin đi => trang sẽ không reload
    var bmiResult = this.state.weight/ Math.pow((this.state.height/100), 2); // math.pow hàm bình phương
    this.setState({bmi : bmiResult}); // this.setState phải theo cú pháp This.setState({})
  }
  render() {
    return (
        <div className="container">
          <h1 > Tính chỉ số BMI </h1>
          <div className="form">
            < Input type="number" value={this.state.height} name="height"  onChange={this.handleChange} label="Chiều cao:" placeholder="Nhập chiều cao của bạn"/>
            < Input type="number" value={this.state.weight} name="weight"  onChange={this.handleChange} label="Cân nặng:" placeholder="Nhập cân nặng của bạn"/>
            <p>Chỉ số BMI của bạn: {this.state.bmi}</p>
            <Button className="btn btn-primary" title="Check" onClick={this.check} />
            </div>
        </div>
    );
  }
}
export default BMI;
