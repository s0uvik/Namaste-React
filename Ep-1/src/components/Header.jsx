import { Link, useNavigate } from "react-router-dom";
import { LOGO_IMAGE } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img className="logo" src={LOGO_IMAGE} />
      <ul className="nav-items">
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
      </ul>
    </div>
  );
};

export default Header;
