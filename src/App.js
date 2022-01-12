import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Btn from "./components/Btn";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">
          <img src="./kirous.png" alt="logo" className="logo"></img>
        </a>
        <h1 className="title">Kirous crypto </h1>
        <h2 className="desc">Stake your assets with reliable node runners</h2>
      </header>
      <div className="layer2"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Btn />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Btn />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer">
        <ul className="list">
          <li>
            <a href="about">About us</a>
          </li>
          <li>
            <a href="mailto:ask@kirous.gq">Contact us</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
