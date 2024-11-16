import { BiBookmark, BiCheckCircle, BiTrash } from "react-icons/bi";

export default function NotificationItem() {
  return (
    <div className="notificationItem">
      <span className="notificationItem__title">Notification</span>
      <b className="notificationItem__about">prep. 2 community</b>

      <p className="notificationItem__content">
        Ipsum veniam eiusmod exercitation anim magna esse minim eu voluptate
        laboris officia sunt irure magna. Sit tempor velit aute quis incididunt
        labore ea magna ut aliqua anim dolore. Quis irure duis Lorem cupidatat
        ut ullamco enim ea. Cillum ex aute ullamco sunt veniam laboris. Occaecat
        mollit elit qui enim.
      </p>

      <div className="notificationItem__controlls">
        <button className="buttonRead" title="Mark as read"><BiCheckCircle /></button>
        <button className="buttonTrash" title="Move to trash"><BiTrash /></button>
        <button className="buttonBookmark" title="Bookmark notification"><BiBookmark /></button>
      </div>
    </div>
  );
}
