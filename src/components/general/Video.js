import {
  BiExitFullscreen,
  BiFullscreen,
  BiPause,
  BiPhoneOutgoing,
  BiPlay,
  BiSkipNext,
  BiSkipPrevious,
  BiVolumeFull,
  BiVolumeMute,
} from "react-icons/bi";
import { MdPictureInPictureAlt, MdSpeed } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import ".././../assets/css/video.css";
import { useRef, useState } from "react";

export default function Video({ src }) {
  // useRefs
  const video = useRef();
  const videoContainer = useRef();

  // useStates

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreeen, setIsFullScreeen] = useState(false);
  const [isPIP, setIsPIP] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [volumeInput, setVolumeInput] = useState(0.5);
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(1);
  // functions
  function togglePlayVideo() {
    isPlaying ? video.current.pause() : video.current.play();
    setIsPlaying(!isPlaying);
  }

  function toggleFullScreen() {
    setIsFullScreeen(!isFullScreeen);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoContainer.current.requestFullscreen();
    }
  }

  function togglePIP() {
    setIsPIP(!isPIP);
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      video.current.requestPictureInPicture();
    }
  }

  function toggleMuteVideo() {
    isMuted ? (video.current.volume = 1) : (video.current.volume = 0);
    setIsMuted(!isMuted);
    if (isMuted) {
      setVolumeInput(0.5);
    } else {
      setVolumeInput(0);
    }
  }

  function formatTime(seconds) {
    if (!seconds) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }

  // document.addEventListener("keyup", (e) => {
  //   if (isPlaying) {
  //     if (e.key == "ArrowRight") {
  //       video.current.currentTime += 5;
  //     } else if (e.key == "ArrowLeft") {
  //       video.current.currentTime -= 5;
  //     }
  //   }
  // });

  function setVideoSpeed(speed) {
    setCurrentSpeed(speed);
    video.current.playbackRate = speed;
  }

  return (
    <div
      className="video__container"
      ref={videoContainer}
      onClick={(e) => {
        if (e.target.matches("video")) {
          togglePlayVideo();
        }
      }}
    >
      <video
        src={
          src == undefined || null
            ? require(".././../assets/videos/video.mp4")
            : src
        }
        ref={video}
        onTimeUpdate={() => {
          setCurrentTime(video.current.currentTime.toFixed(0));
          setProgressBar(video.current.currentTime.toFixed(0));
        }}
        onLoadedMetadata={() => {
          setDuration(video.current.duration.toFixed(0));
          video.current.volume = 0.5;
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          video.current.currentTime = 0;
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
        }}
      ></video>

      <div className="controlls">
        <div className="videoDurationBar__container">
          <input
            className="videoDurationBar"
            type="range"
            min={0}
            value={progressBar}
            onChange={(e) => {
              setProgressBar(e.target.value);
              video.current.currentTime = e.target.value;
            }}
            max={video.current?.duration || 0}
          />
        </div>

        <div className="buttons">
          <button
            className="btnController"
            onClick={() => {
              video.current.currentTime -= 5;
            }}
          >
            <BiSkipPrevious />
          </button>
          <button
            className="btnController"
            onClick={() => {
              togglePlayVideo();
            }}
          >
            {isPlaying ? <BiPause /> : <BiPlay />}
          </button>
          <button
            className="btnController"
            onClick={() => {
              video.current.currentTime += 5;
            }}
          >
            <BiSkipNext />
          </button>

          <div className="videoVolume__container">
            <button
              className="btnController"
              onClick={() => {
                toggleMuteVideo();
                setVolumeInput(isMuted ? 0.5 : 0);
              }}
            >
              {isMuted ? <BiVolumeMute /> : <BiVolumeFull />}
            </button>

            <input
              type="range"
              min={0}
              value={volumeInput}
              step={"any"}
              onChange={(e) => {
                setVolumeInput(e.target.value);
                video.current.volume = volumeInput;
                if (e.target.value == 0) {
                  video.current.volume = 0;
                  setIsMuted(true);
                } else {
                  setIsMuted(false);
                }
              }}
              max={1}
            />

            <div className="time">
              {formatTime(currentTime) + " "}/
              {duration ? " " + formatTime(duration) : "00:00"}
            </div>
          </div>
        </div>

        <div className="rightSide__buttons">
          <div
            className={
              showSpeedOptions ? "speedContainer show" : "speedContainer"
            }
          >
            <ul
              className={
                currentSpeed == 1
                  ? "dropDown normal"
                  : currentSpeed == 1.5
                    ? "dropDown speed1"
                    : currentSpeed == 2
                      ? "dropDown speed2"
                      : currentSpeed == 0.5
                        ? "dropDown slow1"
                        : "dropDown slow2"
              }
            >
              <li
                onClick={() => {
                  setShowSpeedOptions(!showSpeedOptions);
                  setVideoSpeed(2);
                }}
              >
                x2
              </li>
              <li
                onClick={() => {
                  setShowSpeedOptions(!showSpeedOptions);
                  setVideoSpeed(1.5);
                }}
              >
                x1.5
              </li>
              <li
                onClick={() => {
                  setShowSpeedOptions(!showSpeedOptions);
                  setVideoSpeed(1);
                }}
              >
                normal
              </li>
              <li
                onClick={() => {
                  setShowSpeedOptions(!showSpeedOptions);
                  setVideoSpeed(0.5);
                }}
              >
                x0.5
              </li>
              <li
                onClick={() => {
                  setShowSpeedOptions(!showSpeedOptions);
                  setVideoSpeed(0.2);
                }}
              >
                x0.2
              </li>
            </ul>
            <button
              className="btnController"
              onClick={() => {
                setShowSpeedOptions(!showSpeedOptions);
              }}
            >
              <MdSpeed />
            </button>
          </div>

          <button
            className="btnController"
            onClick={() => {
              togglePIP();
            }}
          >
            {isPIP ? <AiOutlineClose /> : <MdPictureInPictureAlt />}
          </button>
          <button
            className="btnController"
            onClick={() => {
              toggleFullScreen();
            }}
          >
            {isFullScreeen ? <BiExitFullscreen /> : <BiFullscreen />}
          </button>
        </div>
      </div>
    </div>
  );
}
