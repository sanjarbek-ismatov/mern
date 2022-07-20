import "../../styles/home/header.scss";
import { Link } from "react-router-dom";
import {  Button } from "@mui/material";
function Header() {
  return (
    <header>
      <nav>
        <Link to='/'>Auth</Link>
        <div className="auth-content">
            <Button sx={{margin: '5px', fontSize: '20px'}} variant="contained" component={Link} to="/register">Sign up</Button>
            <Button sx={{margin: '5px', fontSize: '20px'}} variant="contained" component={Link} to="/login">Sign in</Button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
