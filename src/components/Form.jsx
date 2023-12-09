/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState ,useEffect} from 'react';
import "../App.css";



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
