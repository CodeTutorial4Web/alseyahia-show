
import PostItem from "../cards/PostItem";
import CreatePost from "./CreatePost";
export default function Community() {
  // Use states

  return (
    <section className="communitySection">
      <div className="community">
        <CreatePost />

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
              "Deserunt consequat deserunt https://codetutorial4web.pages.dev/  commodo est. Minim laborum fugiat dolore cillum cupidatat eiusmod ullamco consequat est non pariatur incididunt sint sunt. Excepteur consequat occaecat do ea tempor. Eu esse do sit in labore enim laborum officia anim voluptate nostrud. Officia veniam cillum eiusmod voluptate nulla voluptate quis ad. Irure dolor nisi amet aliquip."
            }
          />

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
              "Deserunt consequat deserunt commodo #holiday est. Minim laborum fugiat dolore cillum cupidatat eiusmod ullamco consequat est non pariatur incididunt sint sunt. Excepteur consequat occaecat do ea tempor. Eu esse do sit in labore enim laborum officia anim voluptate nostrud. Officia veniam cillum eiusmod voluptate nulla voluptate quis ad. Irure dolor nisi amet aliquip."
            }
          />


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
