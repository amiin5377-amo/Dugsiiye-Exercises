const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.length === 0 ? (
          <li>No users found.</li>
        ) : (
          users.map((user) => 
            (
            <li key={user.id}>
              <strong >  {user.name}</strong> - {user.email}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UserList;