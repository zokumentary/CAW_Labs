const DisplayTab2 = () => {
    // 2. Rewrite the previous component to display:
    //    Element 1 is: hello
    //    Element 2 is: world
    //    Element 3 is: from
    //    etc.
    const tab = ["hello", "world", "from", "react"];

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

                        key={item}>Element {index} is: {item}</li>
                ))}

            </ul>
        </>
    );
}

export default DisplayTab2;