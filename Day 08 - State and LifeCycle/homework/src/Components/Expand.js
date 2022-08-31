import React, { Component } from "react";

class Expand extends Component {
  render() {
    return (
      <div style={{ textAlign: "Left"}}>
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
        <div>
          <button onClick={this.props.onLogOut}>Đóng giới thiệu</button> <br />
          <h3>Giới thiệu</h3>
          <span>
            Trong React, các component hoạt động giống như các hàm trả về các
            thành phần HTML Các component là các thành phần độc lập và có thể sử
            dụng lại. Các component thực hiện công việc giống như các functions
            trong JavaScript nhưng chúng độc lập và nhiệm vụ chính là trả về
            HTML thông qua hàm render Có 2 loại component là Function Component
            và Class Component.
          </span>
        </div>
      </div>
    );
  }
}

export default Expand;
