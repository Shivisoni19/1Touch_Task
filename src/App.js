import "./App.css";
import './utils/Color.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from './components/CustomNavbar'
import Footer from './components/Footer'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Header from "./components/Header";
import Slider from "./components/Slider";
import Slider1 from "./Slider1";
// import ProgressBar from "./components/ProgressBar";


function App() { 
  return (
    // <h1>hello</h1>
    <div className="bg-color">
      <Router>
        <Header/>
        <CustomNavbar/>
        {/* <ProgressBar/> */}
          <div className="fluid-container main-page">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="about" element={<About/>} />
            <Route exact path="contact" element={<Contact/>} />
            <Route exact path="/slider1" element={<Slider1/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;