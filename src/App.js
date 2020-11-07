import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navs/Navbar';
import Routes from "./Routes.js";
import Footer from "./components/Navs/Footer";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
