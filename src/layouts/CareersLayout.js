import { Outlet } from "react-router-dom";

const CareersLayout = () => (
  <div className="careers-layout">
    <h2>Careers</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, perspiciatis.</p>

    <Outlet />
  </div>
)

export default CareersLayout;