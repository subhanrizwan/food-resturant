import React, { useContext } from 'react'
import UserContext from './UserContext'

function login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const  {setUser} = useContext(UserContext); 


    const HandleSubmit = ()=>{  
        e.preventDeafult();
        setUser = ({username,password})
    }
  return (
    <>
    <h2>Login User</h2>
    <input type="text" placeholder='Username'
    value={username} 
    onChange={()=> setUsername(e.target.value)}
    />
    <input type="text" placeholder='password'
    value={password}
    onChange={()=> setPassword(e.target.value)}
     />
    <button onClick={HandleSubmit()} >Submit</button>
    </>
  )
}

export default login