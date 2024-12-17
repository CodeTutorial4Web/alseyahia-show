import Header from "../components/general/Header";
import ".././assets/css/forms.css";
import { Link } from "react-router-dom";
import Btn from "../components/general/Btn";

export default function Login() {
  function formSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="login p-inline m-top">
      <Header text="Login" />
      <form className="login__form form" onSubmit={formSubmit}>
        <div className="form__group col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form__group col">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="form__group">
          <Btn hov="hov3" text="Login" />
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </main>
  );
}
