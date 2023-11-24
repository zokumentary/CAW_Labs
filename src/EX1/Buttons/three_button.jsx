
 import { useState } from "react";
// 3. Create a main App component containing 3 buttons (Button1, Button2, and Button3) and 
// displaying a paragraph containing the text: "Button #i was clicked".

const ThreeButton = () => {
  
    const [number, setNumber] = useState(0);
    
    const clickHandler = (num ) => {
        setNumber(num);
    }
    
    return (
        <>
            <h5>
                Three Button
            </h5>

            <button onClick={() => clickHandler(1)}>Button1</button>
            &nbsp;
            <button onClick={() => clickHandler(2)}>Button2</button>
            &nbsp;
            <button onClick={() => clickHandler(3)}>Button3</button>
            <h6>Button #{number} was clicked</h6> 
            
        </>
    );

}

export default ThreeButton;