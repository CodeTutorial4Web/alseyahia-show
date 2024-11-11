import moment from "moment/moment";
import UserAvatar from "../general/UserAvatar";
import { Link } from "react-router-dom";

export default function VideoCard({
  user,
  videoThumbnail,
  views,
  videoTitle,
  publishedOn,
  videoId,
  videoTime

}) {


  return (
    <div className="videoCard">
      <div
        to={"/video/" + videoId}
        className="videoThumbnail"
        style={{
          backgroundImage: `url(${
            videoThumbnail
              ? videoThumbnail
              : "https://www.wowmakers.com/static/e743f3689ca0c0bac8faab39023da37f/fe407/Video-thumbnail.jpg"
          })`,
        }}
      >

        <span className="videoDuration">
            {}
        </span>
      </div>

      <Link  to={"/video/" + videoId}>
        {videoTitle.length > 50 ? videoTitle.slice(0, 50) + "..." : videoTitle}
      </Link>

      <Link className="videoData" to={"/user/" /* user id */}>
        <div className="videoUserData">
          <UserAvatar scale={.8} avatarImage={null} />

          <div className="videoViews__date__owner">
            <h4>mohamed_fatastan</h4>

            <ul className="videoViews__date">
              <li>{views ? views : 0} views</li>
              <li>{moment(publishedOn).fromNow()}</li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}
