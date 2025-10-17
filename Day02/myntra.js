import React from "react";
import ReactDOM from "react-dom/client";

function Card(props){
    return (
<div style={{border:"2px solid black ", padding:"2px"}}>
    <img src="https://images.unsplash.com/photo-1610142991820-e02266a4a9f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987" height="200px" width="200px"/>
    <div style={{textAlign:"center"}}>
        <h2>{props.cloth}</h2>
    <h1>{props.offer}</h1>
    <h2>Shop Now</h2>
    </div>
</div>


    )
}
const arr=[{cloth:"Tshirt", offer:"20-60%OFF"},{cloth:"Jeans", offer:"50-80%OFF"}, {cloth:"Pant" ,offer:"50-60%OFF"}, {cloth:"pajama", offer:"20-80%OFF"}];
function App(){
return (
//header

//body
<div style={{display:"flex", gap:"15px", flexWrap:"wrap"}}>
    {/* <Card cloth="T-Shirt" offer="20-80%OFF"/>
    <Card cloth="Jeans" offer="50-80%OFF"/>
    <Card cloth="Shirt" offer="30-80%OFF"/>
    <Card cloth="Pant" offer="50-60%OFF"/>
    <Card cloth="Kurta" offer="30-80%OFF"/>
    <Card cloth="pajama" offer="20-80%OFF"/>
    <Card cloth="jacket" offer="10-80%OFF"/>
    <Card cloth="Jeans" offer="20-80%OFF"/>
    <Card cloth="T-Shirt" offer="20-80%OFF"/>
    <Card cloth="T-Shirt" offer="70-80%OFF"/>
    <Card cloth="T-Shirt" offer="20-80%OFF"/>
    <Card cloth="T-Shirt" offer="70-80%OFF"/> */}
    
    {
        arr.map((value,index)=> <Card  key={index} cloth={value.cloth} offer={value.offer}/>)
    }
</div>
//footer
)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);