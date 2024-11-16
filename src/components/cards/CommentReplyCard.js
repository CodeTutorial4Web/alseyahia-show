import { BiChevronDown, BiCommentAdd, BiLike } from "react-icons/bi";
import UserAvatar from "../general/UserAvatar";

export default function CommentReplyCard() {
  return (
    <div className="commentCard reply">
      <div className="userData">
        <UserAvatar scale={0.8} avatarImage={""} />
        <span className="username">@mostafa_ahmed</span>
      </div>

      <p>
        Nisi id sint tempor sint sunt nulla reprehenderit eiusmod pariatur ex
        mollit. Commodo ipsum nisi tempor consequat et do qui sint voluptate et.
        Ad non incididunt nisi magna nostrud ea adipisicing qui ad officia est.
        Laboris adipisicing irure nisi anim velit mollit eiusmod sit sit do.
        Magna ea incididunt Lorem consectetur eu. Laborum sunt pariatur deserunt
        in. Laboris anim aute tempor fugiat cillum ipsum.
      </p>

      <div className="commentsControlls">
        <div className="commentsControlls__btns">
            <button><BiLike /></button>
        </div>
        <div>
        <span>12 likes</span>
        </div>
    
      </div>

     
    </div>
  );
}
