import { StyleSheet, View , Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
return <View style={styles.card}>{children}</View>
}

const deviceWidht = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        // flex : 1 ,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: deviceWidht < 380 ? 18 : 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // 안드로이드 전용 , border끝에 그림자효과
    
        /** 아이폰 전용 */
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 }, // 아래쪽으로 2
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})

export default Card;