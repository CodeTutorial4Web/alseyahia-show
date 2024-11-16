import Header from "../components/general/Header";

import ".././assets/css/createVideo.css";
import { BiCheck, BiCheckCircle, BiPlusCircle, BiUpload, BiX } from "react-icons/bi";
import { useRef, useState } from "react";

export default function CreateVideo() {
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  const [videoSrc, setVideoSrc] = useState(null);
  const [enableQuiz, setEnableQuiz] = useState(false);
  const [quizType, setQuizType] = useState("choose");

  const videoInputRef = useRef();

  function handleUploadVideo(e) {
    const files = e.target.files;
    if (files && files.length > 0) {
      const videoFile = files[0];
      console.log("Video file:", videoFile);

      const videoURL = URL.createObjectURL(videoFile);
      setVideoSrc(videoURL);
    } else {
      console.log("No video selected.");
      setVideoSrc(null);
    }
  }

  function handleResetVideo() {
    videoInputRef.current.value = "";
    setVideoSrc(null);
  }

  function handleQuizType(type) {
    setQuizType(type);
  }
  return (
    <main className="createVideoPage">
      <Header text="Create video" />
      <form onSubmit={handleFormSubmit}>
        <div className="formFirstPart">
          <div className="formGroup uploadVideoGroup" title="Upload video">
            {videoSrc ? (
              <div>
                <video src={videoSrc} controls></video>

                <span>
                  <BiX />
                </span>
              </div>
            ) : (
              <label htmlFor="uploadVideo" title="Upload video">
                <BiUpload />
                <span>Click to upload video</span>
              </label>
            )}

            <input
              type="file"
              id="uploadVideo"
              onChange={(e) => {
                handleUploadVideo(e);
              }}
              ref={videoInputRef}
              accept=".mp4"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="videoTitle">Title</label>

            <input
              className="regInput"
              placeholder="Video title..."
              type="text"
              id="videoTitle"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="videoDescription">Description</label>
            <textarea
              className="regInput"
              placeholder="Video description..."
              id="videoDescription"
            ></textarea>
          </div>
        </div>

        <div
          className={enableQuiz ? "formSecondPart enable" : "formSecondPart"}
        >
          <button
            onClick={(e) => {
              setEnableQuiz(!enableQuiz);
            }}
            className="enableQuiz"
            title="Enable quiz"
          >
            <BiCheckCircle />
          </button>
          <div className="chooseQuizType">
            <label>Quiz type</label>

            <div className="quizTypes">
              <span
                onClick={() => {
                  handleQuizType("choose");
                }}
                className={
                  quizType == "choose"
                    ? "quizTypes__item active"
                    : "quizTypes__item"
                }
              >
                Choose
              </span>

              <span
                onClick={() => {
                  handleQuizType("complete");
                }}
                className={
                  quizType == "complete"
                    ? "quizTypes__item active"
                    : "quizTypes__item"
                }
              >
                Complete
              </span>
            </div>

            {quizType == "choose" ? (
              <div className="quizTypeChoose">
                <div className="upperPhase">
                  <label>Choose the correct answer</label>
                <button className="addQuestion"><BiPlusCircle /> add question</button>

                  </div>

                <div className="questions">
                  <div className="questions__item">
                    <span className="question" contentEditable>
                      Question
                    </span>

                    <div className="answers">
                      <ol>
                        <li> <span contentEditable>Answer 1</span>   <i><BiCheck /></i></li>
                        <li> <span contentEditable>Answer 2</span>   <i><BiCheck /></i></li>
                        <li> <span contentEditable>Answer 3</span>   <i><BiCheck /></i></li>
                        <li> <span contentEditable>Answer 4</span>   <i><BiCheck /></i></li>
                      </ol>
                    

                    </div>
                  </div>

                  <div className="questions__item">
                    <span className="question" contentEditable>
                      Question
                    </span>

                    <div className="answers">
                      <ol>
                        <li> <span contentEditable>Answer 1</span>   <b><BiCheck /></b></li>
                        <li> <span contentEditable>Answer 2</span>   <b><BiCheck /></b></li>
                        <li> <span contentEditable>Answer 3</span>   <b><BiCheck /></b></li>
                        <li> <span contentEditable>Answer 4</span>   <b><BiCheck /></b></li>
                      </ol>
                    

                    </div>
                  </div>
                </div>


              </div>
            ) : (
              <div>Complete</div>
            )}
          </div>
        </div>
      </form>
    </main>
  );
}
