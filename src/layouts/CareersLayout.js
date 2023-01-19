import { Outlet } from "react-router-dom";

const CareersLayout = () => (
  <div className="careers-layout">
    <h2>Careers</h2>
    <p>Jobs across all teams in all locations.</p>

    <Outlet />
  </div>
)

export default CareersLayout;