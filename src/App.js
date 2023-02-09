import React,{useState, useEffect} from 'react';
import AddUser from './components/AddUser'
import UsersList from './components/UserList';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5Afms_1NOE14yKGoBSOy-oDvtEth1EPM",
  authDomain: "dentira-assignment.firebaseapp.com",
  projectId: "dentira-assignment",
  storageBucket: "dentira-assignment.appspot.com",
  messagingSenderId: "759718195025",
  appId: "1:759718195025:web:c31cb4908b8ae00d68ad70",
  measurementId: "G-14TB7J358T",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeUserData(data, id) {
  const postListRef = ref(db, "posts");
  const newPostRef = push(postListRef);
  set(newPostRef, {
    id: id,
    data: data,
  });
}

const getLocalItem= ()=>{
  let list = localStorage.getItem("cards");
  if(list) return (list=JSON.parse(localStorage.getItem("cards")));
  else return [];
}

function App() {
  const [usersList,setUsersList]=useState(getLocalItem());

  const addUserHandler = (userDec) => {
    setUsersList((prevUsersList) => {
      const id = Math.random().toString();
      writeUserData({ dec: userDec, id: id }, id);
      return [...prevUsersList, { dec: userDec, id: id }];
    });
  };

  const removeUserHandler = (id) => {
    const newCard = usersList.filter((item)=> item.id !== id );
    setUsersList(newCard);
  };

  useEffect(()=>{
    localStorage.setItem('cards', JSON.stringify(usersList))
  },[usersList])

  return (
    <div>
      <UsersList users={usersList} onRemoveUser={removeUserHandler}/>
      <AddUser onAddUser={addUserHandler}/>
    </div>
  );
}

export default App;