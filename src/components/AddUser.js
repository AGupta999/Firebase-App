import React, { useState } from 'react';
import Button from '../UI/Button'
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserDec, setEnteredUserDec] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserDec.trim().length === 0) return;
    props.onAddUser(enteredUserDec);
    setEnteredUserDec('');
  };

  const userDecChangeHandler = (event) => {
    setEnteredUserDec(event.target.value);
  };

  return (
    <div>
       <div className={classes.input}>
        <form onSubmit={addUserHandler}>
           <input
                id="userDec"
                type="text"
                value={enteredUserDec}
                onChange={userDecChangeHandler}
           />
            <Button type="submit">Add Card +</Button>
            </form>
        </div>
    </div>
  );
};

export default AddUser; 