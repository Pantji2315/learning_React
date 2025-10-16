 const element =React.createElement("h1",{id:"first",className:"himanshu",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"hello coder army");
 const element2 =React.createElement("h2",{id:"second",className:"panji",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"aaj majja aagya");

 const div1=React.createElement("div",{},[element,element2]);
 const root =ReactDOM.createRoot(document.getElementById("root"));
 root.render(div1);