//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" // using bootstrap
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages'
// import About from './pages/about';
// import Contact from './pages/contact';
// import Projects from './pages/projects';

function App() {
  return (
    <Router>
      {/* <Sidebar />
      <Navbar /> */}
      <Home />
      {/* <Switch>
          <Route path="/" exact component={Home} />'<Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
      </Switch> */}
    </Router>
  );
}

export default App;
