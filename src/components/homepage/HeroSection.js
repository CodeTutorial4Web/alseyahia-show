import { motion } from "framer-motion";
import ".././.././assets/css/homepage.css";
import Btn from "../general/Btn";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeroSection() {

  return (
    <motion.section
      initial={{ filter: "contrast(10%)" }}
      whileInView={{ filter: "contrast(100%)", transition: { duration: 1 } }}
      viewport={{ once: true }}
      className="homepageSection heroSection p-inline"
    >
      <div className="heroSection__content">
        <h1 className="heroSection__title">Alseyahia Communities</h1>

        <p>
          The First Official Languages Alseyahia School in Sixth of October City, Egypt, provides advanced education focusing on multilingual skills, cognitive development, and extracurricular activities to nurture well-rounded, responsible students.
        </p>

        <Link to="/register" className="link">
          Register
        </Link>
      </div>

      <div style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(https://t3.ftcdn.net/jpg/05/57/35/54/360_F_557355484_m6hSlsoImUnzPQPC6d295zcFE3bsyFnF.jpg)"
      }} className="heroSection__image image1">

      </div>

      <div style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1)"
      }} className="heroSection__image image2">

      </div>

      <div style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(https://studyportals.com/app/uploads/2024/11/shutterstock_2484576879-640x560.jpg)"
      }} className="heroSection__image image3">

      </div>

    </motion.section>
  );
}
