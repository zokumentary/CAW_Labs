const DisplayTab3 = () => {
    //     3. Same content as question 2. by adding the click event to the elements. When an element 
    //      in the list is clicked, it is removed.

    const tab = ["hello", "world", "from", "react"];

    function handlingClick(params) {
        params.target.style.display = 'none'
    }
    return (
        <>
            <h5>
                Display Tab
            </h5>
            <ul
                style={
                    {
                        listStyleType: "none",
                    }
                }
            >
                {tab.map((item, index) => (
                    <li style={
                        {
                            textAlign: "center"
                        }
                    }
                        onClick={
                            (e) => handlingClick(e)
                        }

                        key={item}>Element {index} is: {item}



                    </li>
                ))}

            </ul>
        </>
    );
}

export default DisplayTab3;