import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet } from "react-native";

function AllPlaces({ route }) {
  const [loadedPlaces, setLodedPlaces] = useState([]);
  const isFocues = useIsFocused();
  useEffect(() => {
    if (isFocues && route.params) {
      setLodedPlaces(curPlaces => [...curPlaces, route.params.place]);
    }
  }, [isFocues, route]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;

const styles = StyleSheet.create({});
