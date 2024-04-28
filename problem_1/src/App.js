import logo from './logo.svg';
import './App.css';
import {  useState} from "react";
import { ViewProfile } from './components/UserProfile';
import { EditProfile } from './components/EditProfile';
function App() {
  const [data,setdata]=useState({
    name:"hk",
    email:"hk@gmail.com"
  })
  const [toggle,settoggle]=useState(true)
  const handleClick=(e)=>{
    e.preventDefault();
    settoggle(prev=>!prev)
    
  }
  return (
    <div className="App">
      <button onClick={handleClick}>{toggle?"EditProfile":"veiwProfile"}</button>
      <div>
        {toggle?<ViewProfile {...data}/>:<EditProfile {...data}/>}
      </div>
    </div>
  );
}

export default App;
