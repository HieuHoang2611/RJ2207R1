import React from 'react';

class User extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from state...",
         content: "Content from state...",
         arr:''
      }
   }
   handleChange = (e) =>{
    this.setState({arr : e.target.value }); //phải có [] ngoài e.target.name
    // [e.target.name] ở đây là name = name (vd:'height') trong thẻ input, target là thẻ input hiện đang active
  }
  handleClick = (e) =>{
    e.preventDefault(); // ngăn không cho trang hiện tại gửi thông tin đi => trang sẽ không reload
    this.setState({header : this.state.arr}); // this.setState phải theo cú pháp This.setState({})
  }
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <input type="text" name = "header" placeholder="write something to the box" onChange={this.handleChange} />
            <button onClick={this.handleClick}>Change title</button>
         </div>
      );
   }
}
export default User;