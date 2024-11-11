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
      <Header text="تسجيل حساب جديد" />
      <form className="register__form form" onSubmit={formSubmit}>
        <div className="form__group">
          <div className="form__group col">
            <label htmlFor="nameAr"> الاسم رباعي باللغة العربية</label>
            <input type="text" name="nameAr" id="nameAr" />
          </div>

          <div className="form__group col">
            <label htmlFor="nameEn"> الاسم رباعي باللغة الانجليزية</label>
            <input type="text" name="nameEn" id="nameEn" />
          </div>
        </div>

        <div className="form__group col">
          <label htmlFor="email">البريد الالكتروني</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form__group col">
          <label htmlFor="password">كلمة المرور</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="form__group col">
          <label htmlFor="confirmPassword">تاكيد كلمة المرور</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>

        <div className="form__group col">
          <label htmlFor="phone">رقم الهاتف</label>

          <div className="phoneNumber">
          <input type="tel" name="phone" id="phone" />
           <p>+20</p> 
          </div>
        </div>

        <div className="form__group col">
          <label htmlFor="phone">الصف الدراسي</label>
          <select id="name">
            <option value="1">الصف الاول الابتدائي</option>
            <option value="2">الصف الثاني الابتدائي</option>
            <option value="3">الصف الثالث الابتدائي</option>
            <option value="4">الصف الرابع الابتدائي</option>
            <option value="5">الصف الخامس الابتدائي</option>
            <option value="6">الصف السادس الابتدائي</option>
            <option value="7">الصف الاول الاعدادي</option>
            <option value="8">الصف الثاني الاعدادي</option>
            <option value="9">الصف الثالث الاعدادي</option>
            <option value="10">الصف الاول الثانوي</option>
            <option value="11">الصف الثاني الثانوي</option>
            <option value="12">الصف الثالث الثانوي</option>
          </select>
        </div>

       

        <div className="form__group">
        <Btn hov="hov3" text="تسجيل "/>
          <p>لديك حساب؟  <Link to="/login">تسجيل الدخول </Link></p>
        </div>
      </form>
    </main>
  );
}
