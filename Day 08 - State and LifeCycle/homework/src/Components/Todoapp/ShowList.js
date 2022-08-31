import React, { Component } from "react";

class Expand extends Component {
  render() {
    const styles = {
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      width: 400 
 };
    return (
      <div>
        <ul>
          {this.props.todolist.map((item, index) => {
            return(
             <li key={index}   style={styles}> {item} <button className="btn"  onClick={()=>this.props.onClick(index)}><i className="fa fa-trash"></i></button></li>
          )
          })}
        </ul>
      </div>
    );
  }
}

export default Expand;
