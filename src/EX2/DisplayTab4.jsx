/* eslint-disable react/prop-types */
const DisplayTab4 = (props) => {
    
    return (
        <   
        >
        <div
        style={
            {
                border: "1px solid black",
                width: "200px",
                height: "200px",
                margin: "auto",
                textAlign: "center",
                backgroundColor: "lightblue",
                borderRadius: "10px",
                alignItems: "center",
            }
        }
        >
          <h5  
        //    title
            style={
                {
                    textAlign: "center",
                    color: "black"
                }
            }
        >
            Display Tab
        </h5>
        <ul
            style={
                {
                    margin: "auto",
                    padding:"0",
                    listStyleType: "none",
                    alignItems: "center",
                }
            }
        >
            {props.tab.map((item) => (
                <li style={
                    {
                        textAlign: "center"
                    }
                }

                    key={item}>{item}</li>
            ))}

        </ul>  
        </div>
        
    </>
      );
}
 
export default DisplayTab4;