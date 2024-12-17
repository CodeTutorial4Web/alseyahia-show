import Header from "../general/Header";
import Slider from './../general/Slider';




export default function PartnersInvestorsSection() {



    const images = [

        {

            image: require(".././.././assets/images/amazonBg.png"),
            content: {
                type: "Partner",
                link: "https://google.com",
                title: "Amazor",
                desc: "Amazor is proud to partner with Alseyahia School by providing high-quality products to be awarded to outstanding students. This collaboration aims to motivate and inspire students to excel in their academic and extracurricular pursuits. The awards, ranging from educational tools to technology gadgets, recognize students' achievements and encourage a culture of excellence and innovation. By supporting the school's initiatives, Amazor demonstrates its dedication to empowering young minds and fostering a spirit of growth and learning within the community."
            }
        },

        {

            image: require(".././.././assets/images/fawryBg.png"),
            content: {
                type: "Partner",
                link: "https://google.com",
                title: "Favry",
                desc: "Favry is a valuable partner of Alseyahia School, contributing to the success of our educational and community initiatives. As a leading payment solutions provider, Favry supports the school by facilitating seamless transactions for various activities, including event registrations, donations, and more. This partnership ensures convenience and efficiency for parents, students, and the school administration, fostering a stronger connection between the institution and its community."
            }
        },

        {

            image: require(".././.././assets/images/youtubeBg.png"),
            content: {
                type: "Partner",
                link: "https://google.com",
                title: "Youtobe",
                desc: "YouTobe is also a valued partner of Alseyahia School, playing a key role in supporting our educational initiatives. Through this partnership, YouTobe provides a platform to showcase the school's achievements, share educational content, and engage with a wider audience. The collaboration allows students and teachers to explore creative ways of learning and communication, using video as a powerful tool to inspire, educate, and connect with the community."
            }
        },
    ];
    return (
        <section id="partnersAndInvestors" className="homepageSection partnersAndInvestorsSection m-top p-inline">
            <Header text="Partners And Investors" />

            <Slider sliderContent={images} />
        </section>
    )
}