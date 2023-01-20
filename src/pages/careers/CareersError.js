import { Link, useRouteError } from "react-router-dom";


const CareersError = () => {
  //gets error thrown from the Route given by the loader
  const error = useRouteError()

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/" >Back to Homepage</Link>
    </div>
  )
}

export default CareersError;