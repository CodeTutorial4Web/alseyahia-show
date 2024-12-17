import Header from "../general/Header";
import ".././../assets/css/homepage.css";
import { Link } from "react-router-dom";
import { to } from 'moment/src/lib/moment/to';

export default function AboutSection() {
  return (
    <section id="about" className="homepageSection m-top aboutSection p-inline">
      <div className="aboutSection__content">
        <Header text="About Us" />


        <p className="aboutSection__text">
          The First Official Languages Alseyahia School is a comprehensive
          educational institution located in Sixth of October City, Egypt. It is
          one of the leading schools aiming to provide an advanced level of education
          focused on enhancing students' linguistic and cognitive skills across
          various educational stages. The school emphasizes teaching English as the
          primary language, alongside other languages such as French and Arabic, enabling
          students to acquire multilingual skills that enhance their global communication
          capabilities and future opportunities in education and work.
        </p>

        <Link to="about" className="link">Read more</Link>

        <div className="socialMedia">

        </div>
      </div>

      <div
        className="aboutSection__image"
        style={{
          backgroundImage: `url(https://i0.wp.com/abralbilad.com/wp-content/uploads/2022/07/%D9%A2%D9%A0%D9%A1%D9%A5%D9%A1%D9%A2%D9%A1%D9%A6_%D9%A1%D9%A4%D9%A0%D9%A2%D9%A4%D9%A0.jpg?fit=2048%2C1232&ssl=1)`,
        }}
      ></div>
    </section>
  );
}
