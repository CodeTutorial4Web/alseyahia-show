import { Link } from "react-router-dom";
import ".././../assets/css/videoPreview.css";
import UserAvatar from "./UserAvatar";
import { BiLike } from 'react-icons/bi';


export default function VideoPreview() {
  return (

    <section className="videoSection">

        <video className="videoPreview" src={require(".././../assets/videos/video2.mp4")} controls></video>

        <div className="videoInfo">

          <div className="title__likes__subscribe">

          <h2>Explan: lesson 1 unit 2 in computer 👨‍💻</h2>

          <div className="likes__subscribe">
            <span> 12 <BiLike /></span>
            <button className="subscribeBtn"> Subscribe </button>
          </div>



          </div>

            <Link className="userData">
          <UserAvatar scale={1} avatarImage={""} />

          <div className="userName">
            <p>Mostafa Ahmed</p>
            <ul>
              <li>@mostafa_ahmed</li>
              <li>Prep. 2</li>
            </ul>
          </div>
        </Link>

        <div className="videoDesc__container">
        <h3>Description</h3>
        <p className="videoDesc">Quis velit nisi et aliqua ad. Elit dolore ad culpa occaecat deserunt amet dolore tempor. Pariatur mollit eu eiusmod et eiusmod minim nulla. Excepteur tempor ipsum velit do officia reprehenderit. Amet in in elit ad laborum reprehenderit nisi duis est eiusmod ut. Occaecat ipsum ad non amet nostrud esse laboris ut enim ad minim nulla adipisicing. Ex sit ipsum ad est amet Lorem officia magna in duis ad veniam est consequat. Reprehenderit ea consectetur aliqua irure tempor sit. Ea ut qui labore id in ea nulla cupidatat sunt excepteur ad non voluptate. Sit ex consequat fugiat voluptate aliqua.</p>

        </div>

        </div>

    </section>

  );
}