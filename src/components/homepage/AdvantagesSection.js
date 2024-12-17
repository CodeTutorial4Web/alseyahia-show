import Header from "../general/Header";

import { FaChalkboardTeacher, FaUsers, FaMoneyBillWave, FaGlobe, FaCertificate } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineInteraction } from "react-icons/ai";
import { MdAccessibilityNew, MdUpdate } from "react-icons/md";
import { BiTime } from "react-icons/bi";


export default function AdvantagesSection() {



    const reasonsForAlseyahia = [
        {
            title: "Diverse Course Offerings",
            desc: "Alseyahia provides a wide range of courses, catering to various interests and skill levels.",
            icon: <AiOutlineAppstore />
        },
        {
            title: "Community Focus",
            desc: "The platform emphasizes building a supportive and engaging community of learners and instructors.",
            icon: <FaUsers />
        },
        {
            title: "Expert Instructors",
            desc: "Courses are taught by experienced professionals and subject matter experts.",
            icon: <FaChalkboardTeacher />
        },
        {
            title: "Free Learning",
            desc: "Alseyahia videos are free and accessible for everyone by expert teachers who teach in schools.",
            icon: <FaMoneyBillWave />
        },
        {
            title: "User-Friendly Interface",
            desc: "The website is designed for ease of use, making it simple for users to navigate and enroll in courses.",
            icon: <MdAccessibilityNew />
        },
        {
            title: "Localized Content",
            desc: "Courses and materials are tailored to meet the cultural and educational needs of the local community.",
            icon: <FaGlobe />
        },
        {
            title: "Interactive Learning",
            desc: "Features like live sessions, discussion forums, and hands-on projects enhance the learning experience.",
            icon: <AiOutlineInteraction />
        },

        {
            title: "Certificate Programs",
            desc: "Completion of courses earns learners recognized certificates to showcase their skills.",
            icon: <FaCertificate />
        },

    ];

    return (
        <section id="advantages" className="homepageSection advantagesSection m-top p-inline">
            <Header text={"Why Alseyahia"} />

            <div className="advantagesGrid">

                {
                    reasonsForAlseyahia.map((el) => {
                        return (
                            <div className="advantagesGrid__item">
                                <span className="icon">
                                    {el.icon}
                                </span>
                                <h4>{el.title}</h4>
                                <p>{el.desc}</p>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    )
}