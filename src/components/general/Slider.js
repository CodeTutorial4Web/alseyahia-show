import { MdChevronLeft, MdChevronRight } from "react-icons/md";



export default function Slider({ sliderContent }) {

    return (

        <div className="slider-container">
            <div className="slider-list">

                {
                    sliderContent && sliderContent.map((el) => {
                        return (
                            <div className="slider-item" style={{
                                backgroundImage: `url(${el.image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}>

                                {
                                    el.content ? (
                                        <div className="slider-content" >
                                            <span>{el.content.type}</span>
                                            <h3>{el.content.title}</h3>
                                            <p>{el.content.desc}</p>
                                            <a href={el.content.link} className="link">Visit site</a>
                                        </div>

                                    ) : ""
                                }


                            </div>
                        )
                    })
                }
            </div>


            {
                sliderContent && <button onClick={() => {
                    const sliderList = document.querySelector(".slider-container .slider-list");

                    const SliderItems = document.querySelectorAll(
                        ".slider-container .slider-list .slider-item"
                    );
                    sliderList.prepend(SliderItems[SliderItems.length - 1]);
                }} className="sliderControllerBtn prev" >
                    <MdChevronLeft />
                </button>
            }


            {
                sliderContent && <button onClick={() => {
                    const sliderList = document.querySelector(".slider-container .slider-list");

                    const SliderItems = document.querySelectorAll(
                        ".slider-container .slider-list .slider-item"
                    );

                    sliderList.appendChild(SliderItems[0]);
                }} className="sliderControllerBtn next" >
                    <MdChevronRight />
                </button>
            }

        </div>
    )

}