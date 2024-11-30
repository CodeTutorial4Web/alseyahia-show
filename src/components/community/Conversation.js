import ".././../assets/css/conversation.css";
import { BiPaperPlane, BiSmile } from "react-icons/bi";
import Message from "../cards/Message";
import UserAvatar from "../general/UserAvatar";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useRef, useState } from "react";

export default function Conversation() {
  // message input

  const [message, setMessage] = useState("");
  const messageInp = useRef();
  // functions
  function handleFormSubmit(e) {
    e.preventDefault();
  }

  // useStates

  const [showPicker, setShowPicker] = useState(false);

  function typeEmoji(e) {
    messageInp.current.focus();
    const sympol = e.unified.split("_");
    const codeArray = [];
    sympol.forEach((code) => codeArray.push(`0x${code}`));
    const emoji = String.fromCodePoint(...codeArray);
    setMessage(message + emoji);
    console.log(e);
  }

  return (
    <section className="conversationSection">
      <div className="user">
        <UserAvatar scale={0.8} avatarImage={""} />
        <div className="userData">
          <p>Mostafa Ahmed</p>

          <span>Prep. 2</span>
        </div>
      </div>
      <div className="conversationGrid">
        <Message
          type={"sender"}
          date={1731154692820}
          text={
            "Officia adipisicing adipisicing laboris laborum id mollit. Aliqua ad occaecat proident fugiat. Eu labore tempor aliqua in consequat anim minim ullamco duis qui elit cillum pariatur. Deserunt cupidatat ipsum cupidatat in in fugiat sunt nostrud id. Minim velit elit ad labore minim dolor mollit eiusmod esse sit ullamco velit cillum. Qui proident culpa aliqua nostrud ex reprehenderit elit incididunt dolor ipsum sunt. Eu velit aute cupidatat exercitation est minim voluptate cillum magna."
          }
        />
        <Message
          type={"sender"}
          date={1731154692820}
          text={
            "Officia adipisicing adipisicing laboris laborum id mollit. Aliqua ad occaecat proident fugiat. Eu labore tempor aliqua in consequat anim minim ullamco duis qui elit cillum pariatur. Deserunt cupidatat ipsum cupidatat in in fugiat sunt nostrud id. Minim velit elit ad labore minim dolor mollit eiusmod esse sit ullamco velit cillum. Qui proident culpa aliqua nostrud ex reprehenderit elit incididunt dolor ipsum sunt. Eu velit aute cupidatat exercitation est minim voluptate cillum magna."
          }
        />
        <Message
          type={"sender"}
          date={1731154692820}
          text={
            "Officia adipisicing adipisicing laboris laborum id mollit. Aliqua ad occaecat proident fugiat. Eu labore tempor aliqua in consequat anim minim ullamco duis qui elit cillum pariatur. Deserunt cupidatat ipsum cupidatat in in fugiat sunt nostrud id. Minim velit elit ad labore minim dolor mollit eiusmod esse sit ullamco velit cillum. Qui proident culpa aliqua nostrud ex reprehenderit elit incididunt dolor ipsum sunt. Eu velit aute cupidatat exercitation est minim voluptate cillum magna."
          }
        />
        <Message
          type={"reciever"}
          date={1731154692820}
          text={
            "Officia adipisicing adipisicing laboris laborum id mollit. Aliqua ad occaecat proident fugiat. Eu labore tempor aliqua in consequat anim minim ullamco duis qui elit cillum pariatur. Deserunt cupidatat ipsum cupidatat in in fugiat sunt nostrud id. Minim velit elit ad labore minim dolor mollit eiusmod esse sit ullamco velit cillum. Qui proident culpa aliqua nostrud ex reprehenderit elit incididunt dolor ipsum sunt. Eu velit aute cupidatat exercitation est minim voluptate cillum magna."
          }
        />
        <Message
          type={"reciever"}
          date={1731154692820}
          text={
            "Officia adipisicing adipisicing laboris laborum id mollit. Aliqua ad occaecat proident fugiat. Eu labore tempor aliqua in consequat anim minim ullamco duis qui elit cillum pariatur. Deserunt cupidatat ipsum cupidatat in in fugiat sunt nostrud id. Minim velit elit ad labore minim dolor mollit eiusmod esse sit ullamco velit cillum. Qui proident culpa aliqua nostrud ex reprehenderit elit incididunt dolor ipsum sunt. Eu velit aute cupidatat exercitation est minim voluptate cillum magna."
          }
        />
        <Message
          type={"reciever"}
          date={1731154692820}
          text={
            "Officia adipisicing adipisicing laboris laborum id mollit. Aliqua ad occaecat proident fugiat. Eu labore tempor aliqua in consequat anim minim ullamco duis qui elit cillum pariatur. Deserunt cupidatat ipsum cupidatat in in fugiat sunt nostrud id. Minim velit elit ad labore minim dolor mollit eiusmod esse sit ullamco velit cillum. Qui proident culpa aliqua nostrud ex reprehenderit elit incididunt dolor ipsum sunt. Eu velit aute cupidatat exercitation est minim voluptate cillum magna."
          }
        />
      </div>
      <div className="createMessage">
        <form className="sendMessageForm" onSubmit={handleFormSubmit}>
<div className="messageInput__picker">

<textarea
            type="text"
            ref={messageInp}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Type your message..."
          ></textarea>

          <div className="emojiPicker">
            <span
              onClick={() => {
                setShowPicker(!showPicker);
              }}
            >
              <BiSmile />
            </span>

            {showPicker ? (
              <div className={"show"}>
                <Picker data={data} emojiSize={25} onEmojiSelect={typeEmoji} />
              </div>
            ) : (
              ""
            )}
          </div>
</div>

        

          <button type="submit">
            <BiPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
