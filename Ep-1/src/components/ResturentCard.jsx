import { IMAGE_MEDIA } from "../utils/constants";

const RestaurantCard = ({ img, name, rating, costForTwo, deliveryTime, onClick }) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      <img src={IMAGE_MEDIA + img} alt="" />
      <div className="restaurant-card-details">
        <h3>{name}</h3>
        <h4>{rating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
