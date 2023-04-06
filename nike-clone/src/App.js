import './App.css';
import React from "react";
import Header from './components/Header.js';
import MainBody from './components/MainBody.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
}

export default App;
