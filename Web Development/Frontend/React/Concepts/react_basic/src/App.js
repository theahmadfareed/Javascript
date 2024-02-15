import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Routing/Home";
import AboutMe from "./Routing/About";
import Condition from "./Routing/Cond";
import Calculator from "./Routing/Cal";
import DemoComponent from "./Components/DemoComponent";
import SearchMovies from "./Routing/Movies";

import "tachyons";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <nav className="ma3 pa3 flex justify-around bg-light-yellow">
        <Link to="/dcomp">Demo Component</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cond">Condition</Link>
        <Link to="/cal">Calculator</Link>
        <Link to="/movies">Search Movies</Link>
      </nav>

      <Routes>
        <Route path="/dcomp" element={<DemoComponent name="Ali" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/cond" element={<Condition />} />
        <Route path="/cal" element={<Calculator />} />
        <Route path="/movies" element={<SearchMovies />} />
      </Routes>
    </div>
  );
}

export default App;
