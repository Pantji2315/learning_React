 




 import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "h1",
//   {
//     id: "first",
//     className: "himanshu",
//     style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
//     key: "h1" 
//   },
//   "hello coder army"
// );

// const element2 = React.createElement(
//   "h2",
//   {
//     id: "second",
//     className: "panji",
//     style: { backgroundColor: "black", fontSize: "30px", color: "pink" },
//     key: "h2" 
//   },
//   "aaj majja aagya"
// );

// const div1 = React.createElement("div", {}, [element, element2]);

const obj={
  age:23,
  salary:25000,
}
const name="himanshu";
const newElement= <>
<h1 id="first">good morning {name} </h1>
<h2 className="second">himanshu age is {obj.age} </h2>
</>
// react component
function greet(){
  return <h1>hello</h1>
};
function meet(){
  return <h2>how are you</h2>
}
const newElement2=greet();
const newElement3=meet();
const newElement4= <>
{greet()}
{meet()} 
</>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newElement4);
