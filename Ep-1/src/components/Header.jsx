import { LOGO_IMAGE } from "../utils/constants"

const Header = () => {
  return (
    <div className="navbar">
      <img className="logo" src={LOGO_IMAGE}  />
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Order</li>
      </ul>
    </div>
  )
}

export default Header