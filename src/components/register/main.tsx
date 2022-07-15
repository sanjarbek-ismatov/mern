import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk } from "../../state/store";
import "../../styles/register/main.scss";
function Main() {
  const state = useSelector((state) => state);
  const dispatch: any = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<{ disabled: boolean }>({
    disabled: false,
  });
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
            type="email"
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
            type="password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          ></TextField>
        </div>
        <Button
          onClick={() => {
            setTimeout(() => setDisabled({ disabled: true }), 500);

            setTimeout(() => setDisabled({ disabled: false }), 2000);
          }}
          disabled={disabled.disabled}
          id="button"
          type="submit"
          variant="contained"
        >
          Register
        </Button>
        <CircularProgress
          sx={{
            display: disabled.disabled ? "block" : "none",
            position: "relative",
            margin: "auto",
            top: "-45px",
          }}
        ></CircularProgress>
      </form>
    </main>
  );
}
export default Main;
