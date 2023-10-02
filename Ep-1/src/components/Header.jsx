import { Link, useNavigate } from "react-router-dom";
import { LOGO_IMAGE } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/context";

const Header = () => {

  const {loggedInUser} = useContext(UserContext)
  console.log(loggedInUser)

  return (
    <div className=" flex justify-between items-center p-2 shadow-lg ">
      <img className=" w-24" src={LOGO_IMAGE} />
      <ul className=" flex gap-8 mr-5">
        <Link to={"/"}>
          <li className="nav-item">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="nav-item">About</li>
        </Link>
        <Link to={"/grocery"}>
          <li className="nav-item">Grocery</li>
        </Link>
        <li className="nav-item">Order</li>
        <li className="nav-item">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
