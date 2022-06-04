import React from 'react';

const UsersList = ({ connectedUsers }) => {

    const users = connectedUsers.map(user => {
        return (
            <li>{user.name} {user.pronouns}</li>
        );
    });

    return (
        <>
            <h3 className='medium-small'>{`${users.length} Connected Users:`}</h3>
            <ul>
                {users}
            </ul>
        </>
    );
};

export default UsersList;