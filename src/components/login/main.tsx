import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppHeader from "../register/AppHeader";

function LoginMain() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<{ disabled: boolean }>({
    disabled: false,
  });
  async function postUser(e: any) {
    e.preventDefault();
    await axios
      .post(`http://localhost:4000/api/post`, {
        name: username,
        mail: email,
        password: password,
      })
      .then((data) => localStorage.setItem("user", JSON.stringify(data.data)))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <header>
        <nav>
          <Link to="/">Auth</Link>
          <div className="auth-content">
            <Button
              sx={{ margin: "5px", fontSize: "20px" }}
              variant="contained"
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              sx={{ margin: "5px", fontSize: "20px" }}
              variant="contained"
              component={Link}
              to="/register"
            >
              Sign up
            </Button>
          </div>
        </nav>
      </header>
      <main>
        <form className="form">
          <div className="input-form">
            <TextField
              label="email"
              autoComplete="off"
              variant="outlined"
              type="mail"
              className="input"
            ></TextField>
          </div>
          <div className="input-form">
            <TextField
              label="password"
              autoComplete="off"
              variant="outlined"
              type="password"
              className="input"
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
            Login
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
    </>
  );
}
export default LoginMain;
