import React from 'react';
import classes from './UserList.module.css'

const UserList=(props)=>{
    return (
        <div className={classes.users}>
          <ul>
            {props.users.map((user)=>{
              return (
                <li key={user.id}>
                  {user.dec}{" "}
                  <button
                    type="button"
                    className={classes.delete}
                    onClick={()=>props.onRemoveUser(user.id)}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
    );
};

export default UserList;



