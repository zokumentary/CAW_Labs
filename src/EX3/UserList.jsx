/* eslint-disable react/prop-types */
const UserList = ({ users, onDelete }) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.username}
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;