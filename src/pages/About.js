import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("brian");

  if (!user) {
    //replace, replaces history with to so you cant hit the back button to go back
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>History</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum
        consequuntur mollitia autem praesentium dicta porro ratione laudantium
        deserunt ex eligendi dolor id iusto nemo consequatur, ab eaque hic
        eveniet!
      </p>
      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  );
};

export default About;
