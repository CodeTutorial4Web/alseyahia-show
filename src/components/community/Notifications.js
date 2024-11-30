import "../../assets/css/notifications.css";
import NotificationItem from "../cards/NotificationItem";
import Header from "../general/Header";

export default function Notifications() {
  return (<main className="notificationsSection">
    <Header text="Notifications" />
    <div  className="notificationsContainer">
      <NotificationItem />
      <NotificationItem />
    </div>
  </main>);
}
