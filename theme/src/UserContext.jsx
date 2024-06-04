import React, { useState, createContext } from 'react'

export const UserInfoContext = createContext()

const UserContext = ({children}) => {

    const [name,setname] = useState('')
  return (
    <UserInfoContext.Provider value={{name,setname}}>
        {children}
    </UserInfoContext.Provider>
  )
}

export default UserContext