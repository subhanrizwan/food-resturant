import React, { useContext } from "react";
import UserContext from "./UserContext";
import { useState } from "react";
import { TextField } from "@mui/material";
import axios from 'axios';
// import 
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  
  const HandleSubmit = () => {
    axios.post('/user/order',{
      username,
      password,  
    })
    .then(res=> console.log(res));
  };
  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   setUser({ username, password });
  // };

  return (
    <>
    <form action="">
    <TextField id="outlined-basic" label="Name" variant="outlined" /> <br /><br />
    <TextField id="outlined-basic" label="Password" variant="outlined" /> <br /><br />
    <button onClick={HandleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
    </form>
      {/* <h2>Login User</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>  setUsername(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        /> */}
        {/* <button onClick={HandleSubmit}>Submit</button> */}
    </>
  );
}

export default Login;
