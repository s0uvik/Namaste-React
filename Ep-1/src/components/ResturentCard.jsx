import { IMAGE_MEDIA } from "../utils/constants";

const RestaurantCard = ({ img, name, rating, costForTwo, deliveryTime, onClick }) => {
  return (
    <div className=" w-[200px] h-[330px]  bg-gray-200 hover:bg-gray-300 cursor-pointer p-3" onClick={onClick}>
      <img src={IMAGE_MEDIA + img} className=" rounded-md w-full h-[150px] object-cover" alt="Restaurant Image" />
      <div className="restaurant-card-details">
        <h3 className=" text-lg font-semibold mt-2">{name}</h3>
        <h4>{rating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime} </h4>
      </div>
    </div>
  );
};

 export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <span className=" absolute bg-black text-white m-2 p-1 rounded-lg">Open Now</span>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
