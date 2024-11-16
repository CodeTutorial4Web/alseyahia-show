import Header from "./Header";
import ".././.././assets/css/shop.css";
import { BiCart } from "react-icons/bi";
import ShopItem from "../cards/ShopItem";

export default function Shop() {
  return (
    <section className="shopSection">
      <div className="topShopNavbar">
        <div className="userCart" title="Cart">
          <BiCart />
          <span>0</span>
        </div>
        <div className="userPoints">
          <p>Points</p>
          <b>125</b>
        </div>
      </div>

      <Header text="Awards Shop" />

      <div className="blog__grid">
        <ShopItem
          image={"https://pngimg.com/d/iphone_12_PNG23.png"}
          title={"Iphone 12"}
          price={28000}
          desc={"Excepteur ea consectetur fugiat qui. Eu duis ea esse ex ea in ut ea id incididunt do esse aliquip. Elit enim duis incididunt nostrud ad dolore."}
        />

        <ShopItem
          image={
            "https://w7.pngwing.com/pngs/988/715/png-transparent-notebook-standard-paper-size-laptop-paper-recycling-notebook-miscellaneous-blue-ink-thumbnail.png"
          }
          price={500}
          title={"Resto Notebook"}
          desc={"Aute sunt excepteur nulla ex. Minim ullamco ipsum elit incididunt voluptate esse sint nostrud occaecat id commodo velit. Ea nostrud fugiat adipisicing labore ad sunt ad ad incididunt esse."}
        />
        <ShopItem
          image={
            "https://atlas-content-cdn.pixelsquid.com/stock-images/blue-pen-ballpoint-qvGqeX7-600.jpg"
          }
          price={50}
          title={"Genisis pen"}
          desc={"Incididunt esse incididunt nulla aliqua irure qui minim. Mollit tempor et dolor ipsum commodo sunt incididunt nostrud non. Voluptate laboris veniam elit pariatur ad excepteur magna minim sint mollit culpa occaecat fugiat."}
        />
      </div>
    </section>
  );
}
