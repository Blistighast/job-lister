import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  // is taking id from the Route path in App.js
  const { id } = useParams();
  const career = useLoaderData(id);

  return (
    <div className="career-details">
      <h2>Career details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem eaque ea
          reprehenderit expedita quam ducimus facilis voluptate corrupti,
          itaque, aspernatur distinctio. Corporis exercitationem voluptatum
          minus aliquam laborum, autem minima odit.
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;
