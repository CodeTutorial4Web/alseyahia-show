import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { BiArrowToRight, BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";

import "../.././assets/css/dashboard.css"

export default function DashboardSection() {

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  return (
    <section className="dashboardSection">
      <div className="communityActivityData">
        <div className="communityActivityData__item">
          <p className="communityActivityData__item__title">Likes</p>

          <b>53</b>
        </div>
        <div className="communityActivityData__item">
          <p className="communityActivityData__item__title">Comments </p>

          <b>20</b>
        </div>
        <div className="communityActivityData__item">
          <p className="communityActivityData__item__title">Posts published</p>

          <b>14</b>
        </div>
      </div>
      <div className="videosWatched">
        <p className="videosWatched__title">Videos watched</p>
        <b>5 <span>4 quizzes solved</span></b>
      </div>
      <Link to={"/notifications"} className="notifications">

        <BiBell size={50} />
        <p className="notifications__title">Notifications</p>
      </Link>
      <div className="badges">
        <p className="badges__title">Badges</p>

        <div className="badges__grid">
          <div className="badges__grid__item">
            <img src={require("../.././assets/images/badge.png")} alt="badge" />
            <p>Golden Badge</p>
          </div>

          <div className="badges__grid__item">
            <img src={require("../.././assets/images/badge.png")} alt="badge" />
            <p>Golden Badge</p>
          </div>

          <div className="badges__grid__item">
            <img src={require("../.././assets/images/badge.png")} alt="badge" />
            <p>Golden Badge</p>
          </div>

          <div className="badges__grid__item">
            <img src={require("../.././assets/images/badge.png")} alt="badge" />
            <p>Golden Badge</p>
          </div>
          <div className="badges__grid__item">
            <img src={require("../.././assets/images/badge.png")} alt="badge" />
            <p>Golden Badge</p>
          </div>

          <div className="badges__grid__item">
            <img src={require("../.././assets/images/badge.png")} alt="badge" />
            <p>Golden Badge</p>
          </div>
        </div>
      </div>
      <div className="pointsLeaderboard">
        <div>
          <p className="pointsLeaderboard__title">Points Leaderboard</p>
          <Bar
            data={{
              labels: ["Mostafa", "Rany", "ferda", "Gandhi", "Samir"],
              datasets: [
                {
                  label: "Points",
                  data: [150, 140, 139, 124, 120],
                  backgroundColor: "#4772fd21",
                  borderRadius: "12px",
                  borderWidth: 1,
                  borderColor: "#4772fd",

                },
              ],
            }}
          />
        </div>

        <div className="yourPoints">

          <div>
            <p className="pointsLeaderboard__title">Your points</p>
            <b>120</b>

          </div>

          <Link to="/shop">
            Awards shop <BiArrowToRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
