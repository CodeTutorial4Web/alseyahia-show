import Header from "../components/general/Header";

import ".././assets/css/createVideo.css";
import { BiCheck, BiCheckCircle, BiPlusCircle, BiUpload, BiX } from "react-icons/bi";
import { useRef, useState } from "react";
import Video from "../components/general/Video";

export default function CreateVideo() {
  function handleFormSubmit(e) {
    e.preventDefault();
    alert()
  }
  const [enableQuiz, setEnableQuiz] = useState(false);
  const [quizType, setQuizType] = useState("choose");
  const [base64Image, setBase64Image] = useState('');

  const imageInputRef = useRef();

  function handleUploadImage(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setBase64Image(reader.result); // Set the base64 image string
      };
      
      reader.readAsDataURL(file); // Convert image to base64
    }

    console.log(base64Image);
    
  }




  function handleQuizType(type) {
    setQuizType(type);
  }
  return (
    <main className="createVideoPage">
      <Header text="Create video" />
      <form onSubmit={handleFormSubmit}>
        <div className="formFirstPart">
          <div className="formGroup uploadTumbnailGroup" title="Upload thumbnail">
            {base64Image ? (
              <div className="prevImage">
                <div style={{
                  backgroundImage:`url(${base64Image && base64Image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%"
                }}></div>

                <span className="remove" onClick={() => {
                  imageInputRef.current.value = "";
                  setBase64Image("");
                }}>
                  <BiX />
                </span>
              </div>
            ) : (
              <label htmlFor="uploadImage" title="Upload thumbnail">
                <BiUpload />
                <span>Click to upload thumbnail</span>
              </label>
            )}

            <input
              type="file"
              id="uploadImage"
              onChange={(e) => {
                handleUploadImage(e);

              }}
              ref={imageInputRef}
              accept="image/*"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="videoInput">Choose video</label>

            <input
              className="regInput"
              placeholder="Video title..."
              type="file"
              id="videoInput"
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

        <button className="submitBtn" type="submit">Create</button>

        </div>

        {/* <div
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
        </div> */}


      </form>
    </main>
  );
}
