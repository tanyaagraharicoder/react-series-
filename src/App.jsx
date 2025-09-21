import Login , {Profile, Setting, UserKey}from "./UserComponent";
function App(){
  return (
    
      <div>
        <Login/>
        <Profile/>
        <Setting/>
        <h1>{UserKey}</h1>
     
      </div>

    )

}


export default App;