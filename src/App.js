import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Home.page";
import TermsOfService from "./pages/TermsOfServiece.page";
import Register from "./pages/Register.page";
import Login from "./pages/Login.page";
import CommunityPage from "./pages/Community.page";
import { AuthContext } from "./authContext/AuthContext";
import { useContext } from "react";
import Videos from "./components/community/Videos";
import Community from "./components/community/CommunitySection";
import DashboardSection from "./components/community/DashboardSection";
import Notifications from "./components/community/Notifications";
import Shop from "./components/community/Shop";
import CreateVideo from "./pages/CreateVideo.page";
import Conversation from "./components/community/Conversation";
import VideoPreview from "./components/community/VideoSection";
import ProfileSection from "./components/community/ProfileSection";
import ShopItemSection from './components/community/ShopItemSection';
import SettingsSection from "./components/community/SettingsSection";


function App() {
  const { user } = useContext(AuthContext).userData;
  const setTheme = (theme) => {
    document.body.className = theme
  };


  if (localStorage.getItem("theme") == null) {
    setTheme("mainColor");
  } else {
    setTheme(localStorage.getItem("theme"));
  }
  return (
    <div className="App">
      <Router>



        <Routes>

          <Route
            path="/"
            exact
            element={user ? <CommunityPage /> : <HomePage />}
          >
            <Route path="/videos" exact element={<Videos />} />
            <Route path="/" exact element={<DashboardSection />} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/shop/:id" exact element={<ShopItemSection />} />
            <Route path="/settings" exact element={<SettingsSection />} />


            <Route
              path="/notifications"
              exact
              element={<Notifications />}
            />

            <Route
              path="/video/:videoId"
              exact
              element={<VideoPreview />}
            />

            <Route path="/profile/:username" exact element={<ProfileSection />} />

            <Route
              path="/community/:communityId/:channelName"
              exact
              element={<Community />}
            />
          </Route>
          <Route
            path="/create-video"
            exact
            element={user ? <CreateVideo /> : <Login />}
          />
          <Route
            path="/register"
            exact
            element={user ? <Navigate to={"/"} /> : <Register />}
          />
          <Route
            path="/login"
            exact
            element={user ? <Navigate to={"/"} /> : <Login />}
          />
          <Route path="/conversation/:id" exact element={user ? <Conversation /> : <Login />} />

          <Route path="/terms-of-service" exact element={<TermsOfService />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
