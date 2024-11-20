import moment from "moment/moment";
import ".././../assets/css/conversation.css";
import { BiPaperPlane, BiSmile } from "react-icons/bi";
import Message from "../cards/Message";
import UserAvatar from "./UserAvatar";

export default function Conversation() {
  function handleFormSubmit(e) {
    e.preventDefault();
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
          <input type="text" placeholder="Type your message..." />
          <span>
            <BiSmile />
          </span>
          <button type="submit">
            <BiPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
