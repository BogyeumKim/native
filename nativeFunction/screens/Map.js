import { StyleSheet } from "react-native";
import MapView, {Marker} from "react-native-maps";

function Map() {
    const region = {
            latitude : 37.55719830000000,
            longitude : 127.19840589999997,
            latitudeDelta: 0.0922,
            longitudeDelta : 0.0429
    };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
}

export default Map;

const styles = StyleSheet.create({
    map : {
        flex : 1
    }
})