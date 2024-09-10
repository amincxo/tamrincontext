import { createContext, useState } from "react"




export const UserContext = createContext();

function UserProvider({children}) {

    const [users ,setUsers] = useState([
        {
            id:1 ,
            name : "amin"
        },
        {
            id:2 ,
            name : "ali"
        },
        {
            id:3 ,
            name : "hosein"
        }
    ]);

  return (
    <UserContext.Provider value={{users , setUsers}} >
        {children}
    </UserContext.Provider >
  )
}

export default UserProvider