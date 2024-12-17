import { useRef, useState } from "react";
import { BiCart, BiMinus, BiPaperPlane, BiPlus, BiSolidStar, BiStar } from "react-icons/bi";
import ".././../assets/css/shopItem.css"
import Slider from './../general/Slider';
import Header from './../general/Header';
import CommentCard from "../cards/CommentCard";
import UserAvatar from "../general/UserAvatar";



export default function ShopItemSection() {



    const [amount, setAmount] = useState(0);


    // useRefs

    const commentInput = useRef();

    // comment function

    function handleComment(e) {
        e.preventDefault()
    }
    return (

        <section className="shopItemSection p-inline">


            <div className="productInfo__side">
                <Slider sliderContent={[
                    {
                        content: null,
                        image: "https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg",
                    },
                    {
                        content: null,
                        image: "https://www.investopedia.com/thmb/vbqJtFiJHnvoqwSpDRgArlgcBDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_Product-Line-Final-58870113a3ca4770a85cabf3549894bb.jpg",
                    },
                    {
                        content: null,
                        image: "https://atlas-content-cdn.pixelsquid.com/stock-images/blue-pen-ballpoint-qvGqeX7-600.jpg",
                    },

                ]} />

                <div className="productDesc">
                    <Header text={"Description"} />
                    <p className="description">

                        In ea nulla laboris incididunt ut ipsum dolor voluptate. Adipisicing veniam Lorem ex aliquip minim. Tempor officia aute et dolor. Adipisicing deserunt et dolor ex. Anim labore mollit elit do velit sunt consequat exercitation. Consectetur pariatur proident exercitation in consequat incididunt elit anim non voluptate.
                    </p>
                </div>

                <div className="productReviews">

                    <div className="headerStars">
                        <Header text={"Reviews"} />

                        <div className="reviewStars">

                            <BiSolidStar />
                            <BiSolidStar />
                            <BiSolidStar />
                            <BiSolidStar />
                        </div>
                    </div>

                    <div className="commentsGrid">
                        <CommentCard inputRef={commentInput} />
                        <CommentCard inputRef={commentInput} />
                        <CommentCard inputRef={commentInput} />
                    </div>
                </div>
            </div>

            <div className="productSideInfo__content">

                <h3 className="productSideInfo__content-name">
                    Qui voluptate duis veniam deserunt reprehenderit esse aute tempor excepteur

                </h3>


                <p className="productSideInfo__content-price">

                    150
                    <span>points</span>
                </p>



                <div className="productSideInfo__content-chooseAmount">

                    <button onClick={() => {

                        if (amount != 0 || amount > 0) {
                            setAmount(amount - 1);

                        }
                    }} className="decrease">
                        <BiMinus />
                    </button>
                    <span>
                        <BiCart />
                        <b>{amount}</b>
                    </span>
                    <button onClick={() => {

                        if (amount < 5) {
                            setAmount(amount + 1);

                        }


                    }} className="increase">
                        <BiPlus />
                    </button>

                </div>

                <button onClick={() => {
                    setAmount(1)
                }} className="addToCart__btn">
                    <span>

                        <BiCart />

                    </span>
                    Add to cart
                </button>


                <p className="discount">Buy 2 of it and get 25% off and one free!</p>





            </div>


        </section>

    )
}