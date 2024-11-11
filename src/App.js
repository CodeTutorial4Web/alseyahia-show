import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import AboutPage from "./pages/AboutPage";
import LatestHonorsPage from "./pages/LatestHonorsPage";
import BlogPage from './pages/BlogPage';
import TermsOfService from "./pages/TermsOfServiece";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CommunityPage from "./pages/CommunityPage";
import { AuthContext } from './authContext/AuthContext';
import { useContext } from "react";
import Videos from "./components/general/Videos";
import Community from "./components/general/Community";
import DashboardSection from "./components/general/DashboardSection";


function App() {

  const {user} = useContext(AuthContext).userData;
  

  return (
    <div className="App">
        <Router>

          <Routes>
            <Route path="/" exact element={user ? <CommunityPage  /> : <HomePage /> } >
              <Route path="/videos" element={<Videos />} />
              <Route path="/" element={<DashboardSection />} />

              <Route path="/community/:communityId/:channelName" element={<Community />} />
            </Route>
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/terms-of-service" exact element={<TermsOfService />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/latest-honors" exact element={<LatestHonorsPage />} />
            <Route path="/blog" exact element={<BlogPage />} />
          </Routes>

        </Router>
    </div>
  );
}

export default App;
