import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchplaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLodedPlaces] = useState([]);
  const isFocues = useIsFocused();

  useEffect(() => {
    async function loadPlace() {
      const places = await fetchplaces();
      setLodedPlaces(places);
    }

    if (isFocues) {
      loadPlace();
      // setLodedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocues]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
