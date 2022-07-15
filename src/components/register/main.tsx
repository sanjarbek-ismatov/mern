import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/register/main.scss";
function Main() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  async function postUser(e: any) {
    e.preventDefault();
    await axios
      .post(`http://localhost:4000/api/register`, {
        username: username,
        mail: email,
        password: password,
      })
      .then((data) => localStorage.setItem("user", JSON.stringify(data.data)))
      .catch((error) => console.log(error));
  }
  return (
    <main>
      <form onSubmit={postUser} className="form">
        <div className="input-form">
          <TextField
            autoComplete="off"
            className="input"
            label="username"
            variant="outlined"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            required
          ></TextField>
        </div>
        <div className="input-form">
          <TextField
            autoComplete="off"
            className="input"
            label="email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          ></TextField>
        </div>
        <div className="input-form">
          <TextField
            autoComplete="off"
            className="input"
            label="password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          ></TextField>
        </div>
        <Button id="button" type="submit" variant="contained">
          Register
        </Button>
      </form>
    </main>
  );
}
export default Main;
