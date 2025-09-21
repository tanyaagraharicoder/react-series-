import Header from "./Header";
function App(){
  return (
    
      <div>
        <h1>first component</h1>
      <Fruit/>
      <Color/>
      </div>

    )

}
function Fruit(){
  return (
    <div>
      <h1> Apple </h1>
    </div>
  )
}
function Color(){
  return (
    <div>
      <h1> red color </h1>
    </div>
  )
}
export default App;