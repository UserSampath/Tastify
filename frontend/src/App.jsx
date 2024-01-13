import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import ShowPost from "./pages/ShowPost/ShowPost";
ShowPost
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        {/* <Route path="/register" element={<SignUp />}></Route> */}
        <Route path="/ShowPost" element={<ShowPost />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
