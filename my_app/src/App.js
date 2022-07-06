import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Cards from "./component/Cards";
import About from "./component/About";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Cards" element={<Cards/> }></Route>
          <Route path="/About" element={<About/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
