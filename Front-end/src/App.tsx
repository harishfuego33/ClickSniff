import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "../src/assets/css/App.css";
//pages
import Login from "./pages/login";
import Home from "./pages/Home";
import Signup from "./pages/signup";
//comps
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import Search from "./pages/search";

function App() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, [height]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
