import { useState } from "react";


function App(){
  const  [display, setDisplay]=useState(false);
  
  return (
    <div>
      <h1> toggle in react js </h1>
      <button onClick={()=>setDisplay(!display)}>toggle</button>
      {/* {
        display ? <h2>Tanya agrahari</h2>: null
      }  */}
      {
        display? <User/>: null
      }
      
     
     
    </div>
   
     
    )

}


export default App;