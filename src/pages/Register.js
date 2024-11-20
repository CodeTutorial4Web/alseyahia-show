import Header from "../components/general/Header";
import ".././assets/css/forms.css";
import Btn from './../components/general/Btn';
import { Link } from "react-router-dom";

export default function Register() {

  function formSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="register p-inline m-top">
      <Header text="Register a New Account" />
      <form className="register__form form" onSubmit={formSubmit}>
        <div className="form__group">
          <div className="form__group col">
            <label htmlFor="nameAr">Full Name in Arabic</label>
            <input type="text" name="nameAr" id="nameAr" />
          </div>

          <div className="form__group col">
            <label htmlFor="nameEn">Full Name in English</label>
            <input type="text" name="nameEn" id="nameEn" />
          </div>
        </div>

        <div className="form__group col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form__group col">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="form__group col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>

        <div className="form__group col">
          <label htmlFor="phone">Phone Number</label>
          <div className="phoneNumber">
            <input type="tel" name="phone" id="phone" />
            <p>+20</p>
          </div>
        </div>

        <div className="form__group col">
          <label htmlFor="grade">Grade</label>
          <select id="grade">
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
            <option value="7">Grade 7</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
        </div>

        <div className="form__group">
          <Btn hov="hov3" text="Register" />
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </main>
  );
}
