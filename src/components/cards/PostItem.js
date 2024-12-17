import { useEffect, useRef, useState } from "react";
import { makeClickable } from "./../../utitlities/linkDetector";
import {
  BiBookmark,
  BiCommentAdd,
  BiCopy,
  BiDotsHorizontalRounded,
  BiEdit,
  BiFullscreen,
  BiLike,
  BiPaperPlane,
  BiShare,
  BiTrash,
} from "react-icons/bi";

import moment from "moment";

import { Link } from "react-router-dom";
import UserAvatar from "./../general/UserAvatar";
import CommentCard from './CommentCard';
import { makeHashtag } from './../../utitlities/hashTags';

export default function PostItem({
  title,
  text,
  image,
  user,
  likes,
  comments,
}) {
  // Use states

  const [showMore, setShowMore] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Use refs
  const postImage = useRef();
  const commentInput = useRef();

  // Functions
  function handleFullScreenImage(e) {
    setFullScreen(!fullScreen);

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      postImage.current.requestFullscreen();
    }
  }

  // comment function

  function handleComment(e) {
    e.preventDefault()
  }

  function scrollToInput() {
    if (commentInput.current) {
      setTimeout(() => {
        commentInput.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }


  };


  return (
    <div className="postsGrid__item">
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
        className="postsGrid__item__menuBtn"
      >
        <BiDotsHorizontalRounded />
      </button>

      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <span className="share">
          <BiShare /> <b>Share</b>
        </span>
        <span className="delete">
          <BiTrash /> <b>Delete</b>
        </span>
        <span className="edit">
          <BiEdit /> <b>Edit</b>
        </span>
        <span className="copy">
          <BiCopy /> <b>Copy</b>
        </span>
      </div>

      <div className="userData__date">
        <Link className="postsGrid__item__userData">
          <UserAvatar scale={1} avatarImage={""} />

          <div className="userName">
            <p>Mostafa Ahmed</p>
            <ul>
              <li>@mostafa_ahmed</li>
              <li>Prep. 2</li>
            </ul>
          </div>
        </Link>

        <b>{moment(1731154692820).fromNow()}</b>
      </div>

      <div className="postsGrid__item__content">
        <h3>{title && title}</h3>

        {showMore ? (
          <p>{makeHashtag(makeClickable, text)} <span
            onClick={() => {
              setShowMore(!showMore);
            }}
            className="showMore"
          >
            show less
          </span></p>
        ) : (
          <p>
            {text.length > 160 ? (
              <>
                {makeClickable(text.slice(0, 160))}
                <span
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                  className="showMore"
                >
                  ...show more
                </span>
              </>
            ) : (
              makeClickable(text)
            )}
          </p>
        )}

        <div className="postImage"></div>
      </div>

      {image ? (
        <div
          ref={postImage}
          className={
            fullScreen
              ? "postsGrid__item__image fullScreen"
              : "postsGrid__item__image"
          }
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: fullScreen ? "contain" : "cover",
            backgroundPosition: "center",
          }}
        >
          <button onClick={handleFullScreenImage} title="Full screen">
            <BiFullscreen />
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="postsGrid__item__controlls">
        <div>
          <button title="Like post">
            <BiLike />
          </button>
          <button title="Comment post" onClick={() => {
            setShowComments(true);
            commentInput.current.focus()
            scrollToInput()
          }}>
            <BiCommentAdd />
          </button>
          <button title="Bookmark post">
            <BiBookmark />
          </button>
        </div>

        <div className="likesComments">
          <span>
            <b>1258</b> likes
          </span>
          <span onClick={() => {
            setShowComments(!showComments)
          }} style={{ cursor: "pointer" }}>
            <b>12</b> comments
          </span>
        </div>
      </div>


      <div className={showComments ? "postsGrid__item__comments show" : "postsGrid__item__comments"}>
        <form className="createComment" onSubmit={handleComment}>
          <UserAvatar scale={.8} avatarImage={""} />
          <input type="text" ref={commentInput} placeholder="Type your comment..." />
          <button><BiPaperPlane /></button>
        </form>
        <div className="commentsGrid">
          <CommentCard inputRef={commentInput} />
          <CommentCard inputRef={commentInput} />
          <CommentCard inputRef={commentInput} />
        </div>
      </div>
    </div>
  );
}
