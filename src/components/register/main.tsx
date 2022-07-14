import { Button, TextField } from "@mui/material";
import axios from "axios";
import "../../styles/register/main.scss";
function Main() {
  type post = {
    username: string;
    email: string;
    password: string;
  };
  function postUser({ username, email, password }: post) {
    axios.post(
      `/api/register?username=${username}&mail=${email}&password=${password}`
    );
  }
  return (
    <main>
      <form onSubmit={postUser} className="form">
        <div className="input-form">
          <TextField
            className="input"
            label="username"
            variant="outlined"
            required
          ></TextField>
        </div>
        <div className="input-form">
          <TextField
            className="input"
            label="email"
            variant="outlined"
            required
          ></TextField>
        </div>
        <div className="input-form">
          <TextField
            className="input"
            label="password"
            variant="outlined"
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
