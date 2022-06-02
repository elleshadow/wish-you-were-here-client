import React from "react";

const UsersList = ({ connectedUsers }) => {

  
    const users = connectedUsers.map(user => {
        return (
            <li>{user.name} {user.pronouns} {user.photo && user.photoURL}</li>
        )
    })

    return (
        <>
        <h1>{`${users.length} Connected Users:`}</h1>
        <ul>
            {users}
        </ul>
        </>
    )
}

export default UsersList;