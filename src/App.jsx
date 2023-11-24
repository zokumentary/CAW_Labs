import './App.css'
import CounterButton from './EX1/Buttons/counter_button'
import DisplayButton from './EX1/Buttons/display_button'
import ThreeButton from './EX1/Buttons/three_button'
import ToggleButton from './EX1/Buttons/toggle_button'
import DisplayTab from './EX2/DisplayTab'
import DisplayTab2 from './EX2/DisplayTab2'
import DisplayTab3 from './EX2/DisplayTab3'
import DisplayTab4 from './EX2/DisplayTab4'
import DisplayForm from './EX3/DisplayForm'
import DynamicDivGenerator from './EX4/DynamicDivGenerator'

function App() {

  return (
    <>
    <div
      style={
        {
          display: "flex",
          justifyContent: "space-around"
        }
      }
    ><div className="card">
        <h1>Exercise 1:</h1>

        <DisplayButton></DisplayButton>
        <br />
        <ToggleButton></ToggleButton>
        <br />
        <ThreeButton></ThreeButton>
        <br />
        <CounterButton></CounterButton>
        

      </div>
      <div className="card">
      <br />
        <h1>Exercise 2:</h1>
        <DisplayTab></DisplayTab>
        <br />
        <DisplayTab2></DisplayTab2>
        <br />
        <DisplayTab3></DisplayTab3>
        <br />
        <div
          style={
            {
              display: "flex",
              justifyContent: "space-around"
            }
          }
        >
          <DisplayTab4 tab={[
            'Sunday', 'hello'
          ]} ></DisplayTab4>
           &nbsp;&nbsp;
          <DisplayTab4 tab={[
            'Monday', 'world'
          ]} ></DisplayTab4>
        </div>
      </div>
       <div className="card">
        <h1>Exercise 3:</h1>
         <DisplayForm></DisplayForm>
         <br />
       </div>
       <div className='card'>
       <h1>Exercise 4:</h1>
        <br />
       <DynamicDivGenerator></DynamicDivGenerator>
       </div>
      </div>
      
    </>
  )
}

export default App
