import Navbar from './Navbar.js';
import Home from './Home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
