const DisplayTab = () => {
    //     1. Given a table of values tab = ["hello", "world", "from", "react"]. Using the map iterator, write 
    // a DisplayTab component that displays this table as an unordered list <ul>.

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
                        textAlign: 'center'

                    }
                }
            >
                {tab.map((item) => (
                    <li
                        style={
                            {
                                textAlign: "center"
                            }
                        }
                        key={item}>{item}</li>
                ))}

            </ul>
        </>
    );
}

export default DisplayTab;