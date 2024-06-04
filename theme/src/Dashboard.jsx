import React,{useContext} from 'react'
import { UserInfoContext } from './UserContext'

const Dashboard = () => {

    const {name} = useContext(UserInfoContext)

  return (
    <div>
        <h3>Hello!{name}</h3>
    </div>
  )
}

export default Dashboard