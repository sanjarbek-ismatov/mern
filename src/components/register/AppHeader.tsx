import { Link } from "react-router-dom";
import Main from "./main";

function AppHeader() {
  return (
    <>
      <header>
        <nav>
          <h1>auth</h1>
          <div className="auth-content">
            <Link to="/">Home</Link>
            <Link to="/login">Sign in</Link>
          </div>
        </nav>
      </header>
      <Main />
    </>
  );
}
export default AppHeader;
