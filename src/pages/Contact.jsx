import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
function Contact() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { setUser } = useContext(UserContext);

  const HandleSubmit = () => {
    let User = {
       username,
       password
    }
    console.log(User);
    
    axios.post("http://localhost:3000/order", {
        User
      }
    )
      .then((res) => console.log("ordered",res))
      .catch((err) => console.log(err));
  };

  return (
    <>
        <TextField
           value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Name"
          variant="outlined"
        />{" "}
        <br />
        <br />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
        />{" "}
        <br />
        <br />
        <button
          onClick={HandleSubmit}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Button
        </button>
    </>
  );
}

export default Contact;
