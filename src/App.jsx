import TaskCard from "./components/TaskCard"
import './App.css';
import TaskMap from "./components/TaskMap";
import { useState } from "react";


function App() {

  const [globalState, setGlobalState] = useState(0);

  function changeGlobalState() {
    let id = globalState===0?1:0;
    console.log('the state is  updated')
    setGlobalState(id);
  }

  return (
    <>
      <div className="app">
        <div className="card_contenr">
          <TaskCard  globalState={globalState}/>
        </div>
        <TaskMap changeGlobalState={changeGlobalState}/>
      </div>
    </>
  )
}

export default App


