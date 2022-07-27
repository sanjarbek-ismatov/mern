import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginMain() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<{ disabled: boolean }>({
    disabled: false,
  });
  async function loginUser(e: any) {
    e.preventDefault();
    await axios
      .post(`http://localhost:4000/api/get`, {
        mail: email,
        password: password,
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      {" "}
      <header>
        <nav>
          <Link to="/">Auth</Link>
          <div className="auth-content">
            {!localStorage.getItem("user") ? (
              <>
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
              </>
            ) : (
              <Button
                variant="contained"
                sx={{ margin: "5px", fontSize: "20px" }}
              >
                Profile
              </Button>
            )}
          </div>
        </nav>
      </header>
      <main>
        <form className="form" onSubmit={loginUser}>
          <div className="input-form">
            <TextField
              label="email"
              autoComplete="off"
              variant="outlined"
              type="mail"
              className="input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></TextField>
          </div>
          <div className="input-form">
            <TextField
              label="password"
              autoComplete="off"
              variant="outlined"
              type="password"
              className="input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
