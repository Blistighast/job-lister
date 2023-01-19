import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  // using loader instead of useEffect to get data from api
  const careersData = useLoaderData()

  return (
    <div className="careers">
      {careersData.map(career => (
        <Link key={career.id} to={career.id.toString()}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

export default Careers;