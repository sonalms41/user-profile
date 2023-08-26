import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route path="edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
