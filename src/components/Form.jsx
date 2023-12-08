/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState ,useEffect} from 'react';
import "../App.css";


const AddElement = () => {
    useEffect(() => {
      // Create a new DOM element
      const newElement = document.createElement('div');
      newElement.textContent = 'I am a dynamically added element!';
  
      // Append the new element to the body
      document.body.appendChild(newElement);
  
      // Clean up: remove the element when the component unmounts
      return () => {
        if (newElement) {
          document.body.removeChild(newElement);
        }
      };
    }, []); // The empty dependency array ensures this effect runs only once
  
    // Expose a function to trigger the element addition
    const addElement = () => {
      // This function can be called whenever you want to add the element
      // (e.g., in response to a user action)
    };
  
    return addElement;
  };

const Form = ({ addTask ,selectedGroup}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // State for managing error message
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if title and description are not empty
        if (title.trim() === '' || description.trim() === '') {
            alert('Please enter both title and description.');
            AddElement();
            return;
        }
        // Call the addTask function passed as a prop to add the new task
        addTask({ title, description });
        // Clear the input fields after adding the task
        setTitle('');
        setDescription('');
    };

    return (
        <>
            <div className="form">
                <header>
                  {selectedGroup&&  <h1>{selectedGroup.title}</h1>}
                  {!selectedGroup&&  <h1>Choose a group</h1>}
                </header>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="form_input title">
                            {/* <label htmlFor="title">Title</label> */}
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <div className="button_form_container">
                                <button type="submit">+</button>
                            </div>
                        </div>
                        <div className="form_input description">
                            {/* <label htmlFor="description">Description</label> */}
                            <textarea
                                id="description"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={5}
                                cols={40}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
