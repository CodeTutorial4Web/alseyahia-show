import { BiCart, BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ShopItem({image, title, desc, price}) {
  return (
    <div className="shopItem">
        <div className="menu">
            <button className="dots">
                <BiDotsHorizontalRounded />
            </button>
        </div>
      <div
        className="shopItem__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <Link to="/product/12" className="shopItem__content">
        <b className="shopItem__title">{title}</b>
        <p className="shopItem__desc">
          {desc.length > 100 ? desc.slice(0, 100) + "..." : desc}
        </p>

        <div className="shopItem__priceAddToCart">
            <span>{price} <i>Points</i></span>
            <button>
                <BiCart />
            </button>
        </div>
      </Link>
    </div>
  );
}
