import Header from "../components/general/Header";
import SideNavbar from "../components/navbars/SideNavbar";
import ".././assets/css/community.css";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className=" communityPage">
      <SideNavbar />

      <Outlet />
    </main>
  );
}
