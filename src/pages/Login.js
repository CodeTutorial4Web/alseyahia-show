import Header from "../components/general/Header";
import ".././assets/css/forms.css";
import { Link } from "react-router-dom";
import Btn from './../components/general/Btn';



export default function Login() {


  function formSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="login p-inline m-top">
      <Header text="تسجيل دخول" />
      <form className="login__form form" onSubmit={formSubmit}>
 

        <div className="form__group col">
          <label htmlFor="email">البريد الالكتروني</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form__group col">
          <label htmlFor="password">كلمة المرور</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="form__group">
        <Btn hov="hov3" text="تسجيل دخول" />

          <p>ليس لديك حساب  <Link to="/register">تسجيل جديد </Link></p>
        </div>
      </form>
    </main>
  );
}
