import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { useEffect } from "react";

function PlaceDetails({route}) {

    const selectedPlaceId = route.params.placeId;

    useEffect(() => {
        // use selectedPlaceId to fetch data Single
    },[selectedPlaceId])
    function showOnMapHanlder() {

    }

    return <ScrollView >
        <Image style={styles.image} />
        <View style={styles.locatinContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>ADDRESS</Text>
                </View>
                <OutlinedButton icon="map" onPress={showOnMapHanlder}  >View on Map</OutlinedButton>
        </View>
    </ScrollView>
}

export default PlaceDetails;

const styles = StyleSheet.create({
    image : {
        height :'35%',
        minHeight : 300,
        width : '100%'
    },
    locatinContainer : {
        justifyContent : 'center',
        alignItems:'center',
    },
    addressContainer : {
        padding:20
    },
    address : {
        color:Colors.primary500,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16,
    },

})