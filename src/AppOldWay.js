import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About"

// this way of routing is the old way of doing it

function AppOldWay() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Job Lister</h1>
        {/* navlink gives a class to the anchor tag it creates like active, link does not*/}
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default AppOldWay;
