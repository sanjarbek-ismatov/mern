import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/home/main.scss";
function Main() {
  return (
    <>
      <main>
        <h1>Birinchi MERN dasturimga xush keldingiz!</h1>
        <div className="button-box">
          <Button sx={{fontSize: '20px', margin: "5px"}} variant='outlined' component={Link} to="/register">Sign up</Button>
          <Button sx={{fontSize: '20px', margin: "5px"}} variant="outlined" component={Link} to="/login">Sing in</Button>
        </div>
      </main>
    </>
  );
}
export default Main;
