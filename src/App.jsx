import { useState } from 'react';
import './App.css';
import About from './components/About';
import DisplayProject from './components/DisplayProject';
import Exhibition from './components/Exhibition';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import HeaderFrames from './components/HeaderFrames';
import Navbar from './components/Navbar';


function App() {
  const [showSingle, setShowSingle] = useState({state: false, value: null})
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HeaderFrames />
      <About />
      {!showSingle.state && <Gallery setShowSingle={setShowSingle} showSingle={showSingle} />}
      {showSingle.state && <DisplayProject showSingle={showSingle} setShowSingle={setShowSingle} />}
      <Exhibition />
      <Footer />
    </div>
  );
}

export default App;
