import  { useState } from "react";
import AuthenticationForm from "./AuthenticationForm";
import UserList from "./UserList";

const DisplayForm = () => {
    const [users, setUsers] = useState([]);
  
    const handleFormSubmit = (user) => {
      const newUser = { ...user, id: Date.now() };
      setUsers([...users, newUser]);
    };
  
    const handleDelete = (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    };
  
    return (
      <div>
        <h5>User Authentication App</h5>
        <AuthenticationForm onSubmit={handleFormSubmit} />
        <UserList users={users} onDelete={handleDelete} />
      </div>
    );
  };
  
  export default DisplayForm;