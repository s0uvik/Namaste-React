import { useContext } from "react";
import User from "../classBaseComponent/User";
import UserContext from "../utils/context";

const About = () => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>
      {loggedInUser}
      <h1> This is About page</h1>
      <User name={"Souvik Sarkar"} location={"Burdwan"} contact={"@s0uvik22"} />
    </div>
  );
};

export default About;
