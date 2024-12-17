import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-about">
          <img src={require(".././../assets/images/logo.png")} alt="Logo" />
          <h3>Alseyahia</h3>
          <p>
            The Official First Languages Alseyahia School is an educational institution located in 6th of October City, Egypt.
            The school is known for its focus on providing high-quality education in English, alongside other languages like French and Arabic.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tourism Village. All rights reserved.</p>
      </div>
    </footer>
  );
}
