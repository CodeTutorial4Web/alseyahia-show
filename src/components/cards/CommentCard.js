import { BiChevronDown, BiCommentAdd, BiLike } from "react-icons/bi";
import UserAvatar from "../general/UserAvatar";
import CommentReplyCard from "./CommentReplyCard";
import { useState } from "react";

export default function CommentCard({ inputRef }) {
  // Use states
  const [showComments, setShowComments] = useState(false);
  // functions

  function scrollToInput (){
    if (inputRef.current) {
            inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
        
 
  };
  return (
    <div className="commentCard">
      <div className="userData">
        <UserAvatar scale={0.7} avatarImage={""} />
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
          <button>
            <BiLike />
          </button>
          <button onClick={()=> {
            scrollToInput()
            inputRef.current.focus()
            
            }}>
            <BiCommentAdd />
          </button>
        </div>
        <div>
          <span>12 likes</span>
          <span
            onClick={() => {
              setShowComments(!showComments);
            }}

            className="repliesBtn"
          >
            12 replies
            <BiChevronDown />
          </span>
        </div>
      </div>

      <div className={showComments ? "commentsGrid reply show" : "commentsGrid reply" }>
        <CommentReplyCard />
        <CommentReplyCard />
        <CommentReplyCard />
      </div>
    </div>
  );
}
