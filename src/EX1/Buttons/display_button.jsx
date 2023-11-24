// import useState
import { useState } from 'react';

// Create a component that displays a button labeled "ClickMe” and displays a paragraph 
// with the text "Clicked" whenever the button is clicked

const DisplayButton = () => {
    // useState
    const [click, setClick] = useState(false);
    // function
    const clickHandler = () => {
        setClick(true);
    }
    return (
        <>
            <h5>
                display button
            </h5>
            <button onClick={clickHandler}>ClickMe</button>
            {click ? <h6>Clicked</h6> : null}
        </>
    );
}


export default DisplayButton;