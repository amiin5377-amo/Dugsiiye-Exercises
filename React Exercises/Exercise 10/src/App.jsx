import UserList from './UserList';

function App() {
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
  { id: 6, name: 'Diana Wilson', email: 'diana.wilson@example.com' },
  { id: 7, name: 'Ethan Martinez', email: 'ethan.martinez@example.com' },
  { id: 8, name: 'Fiona Lee', email: 'fiona.lee@example.com' },
];


  return (
    <>
      <UserList users={users} />
    </>

  )
}

export default App;
