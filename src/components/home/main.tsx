import { Link } from "react-router-dom";
import "../../styles/home/main.scss";
function Main() {
  return (
    <>
      <main>
        <h1>Birinchi MERN dasturimga xush keldingiz!</h1>
        <div className="button-box">
          <Link to="/register">Sign up</Link>
          <Link to="/login">Sing in</Link>
        </div>
      </main>
    </>
  );
}
export default Main;
