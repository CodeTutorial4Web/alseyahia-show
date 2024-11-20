import moment from "moment/moment";



export default function Message({ type, text, date }) {
  return (
    <div className= {type == "sender" ? "messageContainer senderMessage" : "messageContainer recieverMessage" } >
      <div className="message">
        <p>
          
          {text && text}
        </p>
        <b>{moment(date && date).fromNow()}</b>
      </div>
    </div>
  );
}
