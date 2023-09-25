import { useParams } from "react-router-dom";
import ShimmerUi from "../components/ShimmerUi";
import useFetchResInfo from "../utils/hooks/useFetchResInfo";

function RestaurantMenu() {
  const { id } = useParams();

  const resInfo = useFetchResInfo(id);

  if (resInfo === null || undefined) return <ShimmerUi />;

  return (
    <center>
      <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
      <h2>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (item) => {
            return <li>{item.card}</li>;
          }
        )}
      </ul>
    </center>
  );
}

export default RestaurantMenu;
