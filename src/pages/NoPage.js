import { Link } from "react-router-dom"

const NoPage = () => (
  <div>
    <h2>Page not found!</h2>
    <p>Go back to <Link to="/">Homepage</Link>.</p>
  </div>
)

export default NoPage