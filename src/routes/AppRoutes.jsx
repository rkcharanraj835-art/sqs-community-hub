import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Events from "../pages/Events/Events";
import Rewards from "../pages/Rewards/Rewards";
import Community from "../pages/Community/Community";
import Gallery from "../pages/Gallery/Gallery";
import Videos from "../pages/Videos/Videos";
import News from "../pages/News/News";
import Clan from "../pages/Clan/Clan";
import NotFound from "../pages/NotFound/NotFound";
import Admin from "../pages/Admin/Admin";
import AdminLogin from "../pages/Admin/AdminLogin";
import ProfilePage from "../features/profile/pages/ProfilePage";
import FeedPage from "../features/feed/pages/FeedPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/community" element={<Community />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/news" element={<News />} />
      <Route path="/clan" element={<Clan />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Admin />} />
      <Route path="/profile/:username" element={<ProfilePage />} />
      <Route path="/feed" element={<FeedPage />} />
    </Routes>
  );
}

export default AppRoutes;