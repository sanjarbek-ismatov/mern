import { Button, TextField } from "@mui/material";
import "../../styles/register/main.scss";
function Main() {
  return (
    <main>
      <form className="form">
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
