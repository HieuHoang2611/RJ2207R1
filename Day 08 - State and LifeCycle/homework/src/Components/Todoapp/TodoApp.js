import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import ShowList from "./ShowList";


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],
      item : ''
    }
  }
  handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value }); //phải có [] ngoài e.target.name
    // [e.target.name] ở đây là name = name (vd:'input1') trong thẻ input, target là thẻ input hiện đang active
  }
  handleAddItem = (e) => {
    let itemInput = this.state.item
    if (itemInput === '') return
    this.setState({list : [...this.state.list, itemInput] });
    this.setState({item:''});
  };
  handleDeleteItem = (index) => {
    var arr = this.state.list;
    arr.splice(index, 1);
    this.setState({list : arr });
  };
  render() {
    return (
        <div className="container" >
          <div className="form" style={{textAlign: 'center', paddingTop: '20px'}}>
            <h1>Todo List</h1>
            <Input type="text" value={this.state.item} name="item" placeholder="add a new todo list item" onChange={this.handleChange}/>
            <Button className="btn 1" title="add" onClick={this.handleAddItem} />
            </div>
            <ShowList todolist={this.state.list} onClick={this.handleDeleteItem}/>
        </div>
    );
  }
}
export default Calculator;
