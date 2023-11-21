import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sound from "./pages/Sound";
import Text from "./pages/Text";
import Image from "./pages/Image";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sound" element={<Sound />} />
          <Route path="/text" element={<Text />} />
          <Route path="/Image" element={<Image />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
