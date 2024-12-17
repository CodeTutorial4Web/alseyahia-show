
import { Link } from 'react-router-dom';
import UserAvatar from './../general/UserAvatar';
import ".././../assets/css/community.css"
import { to } from 'moment/src/lib/moment/to';






export default function ArticleItem({ title, content, date }) {
  return (
    <div className="blog__grid__item">

      <div className="blog__grid__item__data">
        <Link to={"/login"} className="postsGrid__item__userData">
          <UserAvatar scale={1} avatarImage={""} />

          <div className="userName">
            <p>Mostafa Ahmed</p>
            <ul>
              <li>@mostafa_ahmed</li>
            </ul>
          </div>
        </Link>
        <div className="blog__grid__item__content">
          <b>{title}</b>
          <p>{content}</p>
        </div>
      </div>


      <span>{date}</span>
    </div>
  );
}
