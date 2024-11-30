import { useState } from "react";
import UserAvatar from "../general/UserAvatar";
import { BiPlusCircle, BiX } from "react-icons/bi";

export default function CreatePost({ channel }) {
  // usestates

  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [showForm, setShowForm] = useState(false);
  // functions

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="createPostContainer">
      <div
        className="createPost"
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        <UserAvatar scale={0.8} avatarImage={""} />

        <div className="text">
          <span>Create new post</span>

          <i>
            <BiPlusCircle />
          </i>
        </div>
      </div>

      {showForm ? (
        <div className="createPostForm">
          <form onSubmit={handleFormSubmit}>
            <span className="close">
              <h3>Create new post</h3>

              <span   onClick={() => {
          setShowForm(!showForm);
        }}>
                <BiX />
              </span>
            </span>

            <div className="formContainer">
              <input
                onChange={(e) => {
                  setPostTitle(e.target.value);
                }}
                id="postTitle"
                value={postTitle}
                placeholder="Post title"
              />
              <textarea
                cols="30"
                rows="10"
                onChange={(e) => {
                  setPostBody(e.target.value);
                }}
                id="postBody"
                value={postBody}
                placeholder="What are your thoughts?"
              ></textarea>

              <button type="submit">Publish</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
