import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import ShowPost from "./pages/ShowPost/ShowPost";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
