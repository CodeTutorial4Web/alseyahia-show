import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import UserAvatar from "./UserAvatar";
import { BiPlusCircle } from "react-icons/bi";
import { useRef, useState } from "react";
import PostItem from "../cards/PostItem";

export default function Community() {
  const { communityId, channelName } = useParams();

  // Use states

  return (
    <section className="communitySection">
      <div className="community">
        <div className="createPost">
          <UserAvatar scale={0.8} avatarImage={""} />

          <span>
            <BiPlusCircle />
            Create new post
          </span>
        </div>

        <div className="postsGrid">
          <PostItem
            title={"hello"}
            user={{
              userFullname: "Mostafa Ahmed",
              username: "@mostafa_ahmed",
              avatar: "",
            }}
            image={
              "https://corporate.walmart.com/content/dam/corporate/images/global-responsibility/sustainability/planet/nature/businessfornature-banner.png"
            }
            text={
              "Deserunt consequat deserunt commodo est. Minim laborum fugiat dolore cillum cupidatat eiusmod ullamco consequat est non pariatur incididunt sint sunt. Excepteur consequat occaecat do ea tempor. Eu esse do sit in labore enim laborum officia anim voluptate nostrud. Officia veniam cillum eiusmod voluptate nulla voluptate quis ad. Irure dolor nisi amet aliquip."
            }
          />
        </div>
      </div>
    </section>
  );
}
