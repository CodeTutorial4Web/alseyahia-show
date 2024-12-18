import { useState } from "react";
import ".././../assets/css/sideNavbar.css";
import UserAvatar from "../general/UserAvatar";
import { Link } from "react-router-dom";
import CommunityPreview from "../cards/CommunityPreview";
import ConversationPreview from "../cards/ConversationPreview";
import { FaBars } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { BiSolidDashboard, BiSolidShoppingBag, BiSolidVideo } from "react-icons/bi";


export default function SideNavbar() {
  // Use states

  const [openNav, setOpenNav] = useState(false);

  return (
    <aside className={openNav ? "sideNavbar open" : "sideNavbar"}>
      <div className="sideNavbar__userData">
        <button
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >






          <FaBars />
        </button>

        <div className="user">
          <UserAvatar scale={1} avatarImage={null} />

          <div className="sideNavbar__userData__name">
            <p>Mostafa Ahmed</p>
            <span>mostafa_ahmed</span>
          </div>
        </div>
      </div>

      <div className="sideNavbarLinks">
        <h4 className="navSubheadingLink">Main pages</h4>

        <div className="otherLinks">
          <Link className="navLink" to="/">
            <i><BiSolidDashboard /></i>
            <span>Dashboard</span>
          </Link>
          <Link className="navLink" to="/videos">
            <i><BiSolidVideo /></i>

            <span>Videos</span>
          </Link>

          <Link className="navLink" to="/settings">
            <i><MdSettings /></i>

            <span>Settings</span>
          </Link>


          <Link className="navLink" to="/shop">
            <i><BiSolidShoppingBag /></i>

            <span>Shop</span>
          </Link>
        </div>

        <h4 className="navSubheadingLink">Communities</h4>

        <ul className="list">
          <CommunityPreview communityGrade={8} />
        </ul>

        <h4 className="navSubheadingLink">Friends</h4>

        <ul className="conversationsList">
          <ConversationPreview
            user={{
              username: "Ahmed Elsisi",
              grade: 8,
            }}
          />
          <ConversationPreview
            user={{
              username: "Omar Sherif",
              grade: 8,
            }}
          />
          <ConversationPreview
            user={{
              username: "Ahmed Hossam",
              grade: 8,
            }}
          />
          <ConversationPreview
            user={{
              username: "Mohanad Mohamed",
              grade: 8,
            }}
          />
          <ConversationPreview
            user={{
              username: "Yassir El-Nemery",
              grade: 0,
            }}
          />
          <ConversationPreview
            user={{
              username: "Ahmed Hossam",
              grade: 0,
            }}
          />
          <ConversationPreview
            user={{
              username: "Ahmed Hossam",
              grade: 0,
            }}
          />

          <ConversationPreview
            user={{
              username: "Ahmed Hossam",
              grade: 0,
            }}
          />
        </ul>
      </div>
    </aside>
  );
}
