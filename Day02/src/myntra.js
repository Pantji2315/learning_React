import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy.js";
 

function App(){
    let [A,setA]=useState(arr);
function sortArray(){
    A.sort((a,b)=>a.price-b.price);
setA([...A]);
}
function  priceabove999(){
    const B= arr.filter((value)=>value.price>999);
    setA(B);
}
return (<>
<Header/>
<button onClick={sortArray}>Sort by Price</button>
<button onClick={priceabove999}>Price above 999</button>
<div  className="middle" style={{display:"flex", gap:"15px", flexWrap:"wrap"}}>
    {
        A.map((value,index)=> <Card  key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
    }
</div>
<Footer/>
</>
)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);