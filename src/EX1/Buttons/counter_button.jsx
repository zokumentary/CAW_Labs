import { useState } from "react";
const CounterButton = () => {
//     Display a counter (in the form of an <h1>) initialized to 0 and two buttons: "Inc" and "Dec" 
// that increment/decrement the counter's content on each click.
   const [count, setCount] = useState(0);
    return (
        <>
            <h5>
                Counter Button
            </h5>
            <button onClick={() => setCount(count + 1)}>Inc</button>
             &nbsp;
            <button onClick={() => setCount(count - 1)}>Dec</button>
            <h1>{count}</h1>
        </>
         
      );
}
 
export default CounterButton;