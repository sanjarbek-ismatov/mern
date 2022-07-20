import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Main from "./main";

function AppHeader() {
  return (
    <>
      <header>
        <nav>
        <Link to='/'>Auth</Link>
          <div className="auth-content">
            <Button sx={{margin: '5px', fontSize: '20px'}} variant="contained" component={Link} to="/">Home</Button>
            <Button sx={{margin: '5px', fontSize: '20px'}} variant="contained" component={Link} to="/login">Sign in</Button>
          </div>
        </nav>
      </header>
      <Main />
    </>
  );
}
export default AppHeader;
