import { Link } from "react-router-dom";
import ".././../assets/css/videoPreview.css";
import UserAvatar from "../general/UserAvatar";
import { BiLike, BiPaperPlane } from "react-icons/bi";
import CommentCard from "../cards/CommentCard";
import { useRef } from "react";
import Video from './../general/Video';

export default function VideoPreview() {
  // useRefs

  const commentInput = useRef();


  // functions

  
  function handleComment(e) {
    e.preventDefault()
  }

  function scrollToInput (){
    if (commentInput.current) {
        setTimeout(() => {
          commentInput.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
        
 
  };
  return (
    <section className="videoSection">

      <div className="videoContainer">
 

    <Video />
      </div>
    

      <div className="videoInfo">
        <div className="title__likes__subscribe">
          <h2>Explan: lesson 1 unit 2 in computer 👨‍💻</h2>

          <div className="likes__subscribe">
        
            <button className="commentBtn" onClick={() => {
              commentInput.current.focus()
              scrollToInput()
            }}> Comment </button>
            <button className="subscribeBtn"> Subscribe </button>
          </div>
        </div>

        <Link className="vide__userData">
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
          <p className="videoDesc">
            Quis velit nisi et aliqua ad. Elit dolore ad culpa occaecat deserunt
            amet dolore tempor. Pariatur mollit eu eiusmod et eiusmod minim
            nulla. Excepteur tempor ipsum velit do officia reprehenderit. Amet
            in in elit ad laborum reprehenderit nisi duis est eiusmod ut.
            Occaecat ipsum ad non amet nostrud esse laboris ut enim ad minim
            nulla adipisicing. Ex sit ipsum ad est amet Lorem officia magna in
            duis ad veniam est consequat. Reprehenderit ea consectetur aliqua
            irure tempor sit. Ea ut qui labore id in ea nulla cupidatat sunt
            excepteur ad non voluptate. Sit ex consequat fugiat voluptate
            aliqua.
          </p>
        </div>

        <div className="videoComments__container">
          <form className="createComment" onSubmit={handleComment}>
            <UserAvatar scale={0.8} avatarImage={""} />
            <input
              type="text"
              ref={commentInput}
              placeholder="Type your comment..."
            />
            <button>
              <BiPaperPlane />
            </button>
          </form>
          <h3>Comments</h3>
          <div className="videoComments">
            <CommentCard inputRef={commentInput} />
            <CommentCard inputRef={commentInput} />
            <CommentCard inputRef={commentInput} />
            <CommentCard inputRef={commentInput} />
            <CommentCard inputRef={commentInput} />
            <CommentCard inputRef={commentInput} />
            <CommentCard inputRef={commentInput} />
            <CommentCard inputRef={commentInput} />
            <CommentCard inputRef={commentInput} />
          </div>
        </div>
      </div>
    </section>
  );
}
