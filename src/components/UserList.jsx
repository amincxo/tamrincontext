import React, { useContext } from 'react'
import { UserContext } from './context/UserProvider'
function UserList() {
    const {users} = useContext(UserContext);
    console.log(users)
  return (

    <div>
        {users.map(user => <p key={user.id} > {user.name}</p> )}
    </div>
  )
}

export default UserList