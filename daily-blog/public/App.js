import './App.css';
import MyComponents from './Components/MyComponents';
import Hello from './Components/Hello';

function App() {
const str = "REACT";
const name = "함수형 컴포넌트";

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/*  */}
      <MyComponents kbs={name} name={name} str={str}/> 
     <Hello kbs = {name} name={name} str={str}/>
    </div>
  );
}

export default App;
