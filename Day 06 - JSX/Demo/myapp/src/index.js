import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line 
const root = ReactDOM.createRoot(document.getElementById("root"));
const hello = React.createElement(
	"h1",
	{id: "msg", className: "title", title: "vip đây này"},React.createElement('b', null,"vippro")
);
root.render(hello);

// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black rowan",
//   "Cranberry"
// ];


// const fruit = (
// <div>
//   <h1>List of fruits</h1>
//   <ul>
//     {
//       fruits.map(
//         (item,index) => <li key={index}>{item}</li>
//         )
//     }
//   </ul>
// </div>
// );
// // time demo
//  const stick = () => {
//     root.render((
//       <div className="container">
//         <h1>Hello World;</h1>
//         <p>Is is time {(new Date()).toLocaleTimeString()} </p> 
//         <p>Is is date{(new Date()).toLocaleDateString()}</p> 
//       </div>
//    ));
//  }
// setInterval(stick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
