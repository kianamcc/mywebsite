import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // using bootstrap
import React from "react";
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
// import Works from './components/works/works';
// import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Menu from './components/menu/menu';
import About from './components/about/about';
import Carousel from './components/carousel/carousel'; //new
import { useState } from "react";


function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className = "app">
      <Topbar open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        {/* <Projects/> */}
        <Carousel />
        <Contact/>
        {/* <Works/> */}
      </div>
      
    </div>
  );
}

export default App;