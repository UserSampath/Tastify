import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/side/SideBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/s" element={<SideBar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
