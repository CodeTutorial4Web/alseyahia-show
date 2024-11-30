import { Link } from "react-router-dom";
import ".././../assets/css/navbar.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      whileInView={{ y: 0, transition: { duration: 1, delay: 1 } }}
      viewport={{ once: true }}
      className={open ? "navbar open" : "navbar"}
    >
      <Link to="/" className="logo">
        <img
          src={require(".././.././assets/images/logo.png")}
          alt="شعار السياحية"
        />
      </Link>

      <ul>
        <li>
          <Link to="/about">من نحن</Link>
        </li>

        <li>
          <Link to="/latest-honors">احدث التكريمات</Link>
        </li>

        <li>
          <Link to="/blog">المدونة</Link>
        </li>
      </ul>

      <div
        class="burger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
    </motion.nav>
  );
}
