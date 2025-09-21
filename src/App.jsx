
function App(){
  let path ="https://unsplash.com/photos/brown-sandals-and-book-on-a-pebble-beach-y5G-tlwMozQ"
  const name = "Tanya Agrahari";
  const userObj={
    name  : "anil sidhu",
    email : " wfrgf",
    phone : 1234567

  }
  let x=10;
  let y= 20;
  function fruit(){
    return "mango";
  }
  function sum(a,b){
    return a+b;
  }
  function operation (a,b, op){
  if(op=="+"){
    return a+b;
  }else if(op=="-"){
    return a-b;
  }else{
    return a*b;
  }
  }


  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      <h1>{name}</h1>
      <h2>{x+y}</h2>
      <h2>{fruit()}</h2>
      <h2>{sum(10,30)}</h2>
      <h1>{operation(10,20,"+")}</h1>
      <h1>{operation(10,20,"-")}</h1>
      <h1>{operation(10,20,"/")}</h1>
      <h1>{userObj.name} </h1>
      <img src={path}  />

    </div>
    
      

    )

}


export default App;