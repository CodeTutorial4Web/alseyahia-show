import { useState } from "react";
import {
  BiCart, BiDotsHorizontalRounded,
  BiShare,
  BiBookmark,
  BiSolidStar,
} from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ShopItem({ image, title, desc, price }) {


  // use states

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="shopItem">
      <div className="menu">
        <button onClick={() => {
          setShowDropdown(!showDropdown);
        }} className="dots">
          <BiDotsHorizontalRounded />
        </button>

        <div className={showDropdown ? "dropdown show" : "dropdown"}>
          <span className="share">
            <BiShare /> <b>Share</b>
          </span>

          <span className="copy">
            <BiBookmark /> <b>Save</b>
          </span>
        </div>
      </div>



      <div
        className="shopItem__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <Link to="/shop/12" className="shopItem__content">
        <b className="shopItem__title">{title}</b>
        <p className="shopItem__desc">
          {desc.length > 100 ? desc.slice(0, 100) + "..." : desc}
        </p>


      </Link>

      <div className="shopItem__priceAddToCart">
        <span>{price} <i>Points</i></span>
        <button>
          <BiCart />
        </button>
      </div>

      <div className="reviewStars">

        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
      </div>
    </div>
  );
}
