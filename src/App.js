import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import 'font-awesome/css/font-awesome.min.css';
import About from './components/About';
// import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer /> 
    </div>
  );
}

export default App;
