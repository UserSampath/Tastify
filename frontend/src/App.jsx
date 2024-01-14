import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import UserManagement from "./pages/userManagement/UserManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/side/SideBar";
import QueueManagement from "./pages/queueManagement/QueueManagement";
import IPConfiguration from "./pages/IPConfiguration/IPConfiguration";
import ReportGenerating from "./pages/reportGenerating/ReportGenerating";
import Settings from "./pages/settings/Settings";
import ShowPost from "./pages/ShowPost/ShowPost";
import Post from "./pages/post/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        {/* <Route path="/register" element={<SignUp />}></Route> */}
        <Route path="/ShowPost" element={<ShowPost />}></Route>

        <Route path="/s" element={<SideBar />}></Route>
        <Route path="/user_Management" element={<UserManagement />}></Route>
        <Route path="queue_management" element={<QueueManagement />}></Route>
        <Route path="/ip_configuration" element={<IPConfiguration />}></Route>
        <Route path="/report_generating" element={<ReportGenerating />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
