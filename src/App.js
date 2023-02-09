import React,{useState} from 'react';
import AddUser from './components/AddUser'
import UsersList from './components/UserList';

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler=(userDec)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,
        {dec: userDec,id: Math.random().toString()}];
    });
  };

  const removeUserHandler = (id) => {
    const newCard = usersList.filter((item)=> item.id !== id );
    setUsersList(newCard);
  };

  return (
    <div>
      <UsersList users={usersList} onRemoveUser={removeUserHandler}/>
      <AddUser onAddUser={addUserHandler}/>
    </div>
  );
}

export default App;