import { useState } from "react";

// Convert the previous button to a toggle button (allows you to display the message 
//     "Clicked" on the first click, third, fifth, etc., and "Not Clicked" on the second click, 
//     fourth, sixth, etc.)

const ToggleButton = () => {
    // useState
    const [click, setClick] = useState(false);
    // function
    const clickHandler = () => {
        setClick(!click);
    }
    return (
        <>
            <h5>
                toggle button
            </h5>
            <button onClick={clickHandler}>ClickMe</button>
            {click ? <h6>Clicked</h6> : <h6>Not Clicked</h6>}
        </>
    );
}


export default ToggleButton;
