import { NavLink } from "react-router-dom"


const Navbar = () => (
  <nav>
    <h1>Job Lister</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="careers">Careers</NavLink>
    <NavLink to="about">About</NavLink>
    <NavLink to="help">Help</NavLink>
  </nav>
)

export default Navbar