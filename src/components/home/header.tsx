import "../../styles/header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <h1>Auth</h1>
        <div className="auth-content">
          <Link to="/register">Sign up</Link>
          <Link to="/login">Sign in</Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
