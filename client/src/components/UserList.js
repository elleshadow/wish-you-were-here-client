import React from 'react';
import '../styles/UserList.css';

const UsersList = ({ connectedUsers }) => {

    const users = connectedUsers.map(user => {
        return (
            <li key={user.id}>{user.name} {user.pronouns}</li>
        );
    });

    return (
        <>
            {users.length > 1 ?
              <h3 className='user-num medium-small'>{`${users.length} Active Users`}</h3>:
              <h3 className='user-num medium-small'>Welcome! It looks like you're the first one here.</h3>}
            {users.length > 1 ?
              <ul className='user-list'>{users}</ul>:
              <></>}
        </>
    );
};

export default UsersList;
