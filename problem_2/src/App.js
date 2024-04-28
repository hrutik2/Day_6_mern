import logo from './logo.svg';
import './App.css';
import { useState,useEffect} from "react";
function App() {
  const [timer ,settimer]=useState(0)
  useEffect(()=>{
   let interval=setInterval(() => {
    settimer(timer+1)
   }, 1000);
   return () => clearInterval(interval);
  },[timer])
  return (
    <div className="App">
      <p>Timer</p>
      <p>{timer}</p>
    </div>
  );
}

export default App;
