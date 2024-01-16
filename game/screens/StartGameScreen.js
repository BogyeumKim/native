import {StyleSheet, TextInput,View} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
function StartGameScreen() {

    return ( 
    <View style={styles.inputContainer}>
        <TextInput/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
        );
    

}

const styles = StyleSheet.create({
    inputContainer : {
        // flex : 1 ,
        padding : 16 ,
        marginTop : 100,
        marginHorizontal : 16,
        backgroundColor: '#72063c',
        borderRadius : 8,
        elevation : 4, // 안드로이드 전용 , border끝에 그림자효과

        /** 아이폰 전용 */ 
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2}, // 아래쪽으로 2
        shadowRadius : 6,
        shadowOpacity : 0.25,
    }
});

export default StartGameScreen;