import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-col">
          <h3>المدرسة</h3>
          <ul>
            <li>
              <Link>من نحن</Link>
            </li>
            <li>
              <Link>الوظائف</Link>
            </li>
            <li>
              <Link to="/terms-of-service">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link>شروط الخدمة</Link>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>الدعم</h3>
          <ul>
            <li>
              <Link>مركز المساعدة</Link>
            </li>
            <li>
              <Link>الأسئلة الشائعة</Link>
            </li>
            <li>
              <Link>تواصل معنا</Link>
            </li>
          </ul>
        </div>
        <div class="footer-col footer-about">
          <img src={require(".././../assets/images/logo.png")} />
          <h3>القرية السياحية</h3>
          <p>
          مدرسة القرية السياحية الأولى الرسمية للغات هي مؤسسة تعليمية تقع في
          منطقة السادس من أكتوبر بمصر. تتميز المدرسة بتركيزها على تقديم تعليم
          عالي الجودة باللغة الإنجليزية، بجانب اللغات الأخرى كالفرنسية والعربية.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 القرية السياحية. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
