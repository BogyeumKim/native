import {StyleSheet, Text, View} from 'react-native';

type Props = {
  name: string;
  isActive?: boolean;
};

function Profile({name,isActive}: Props) {
  return (
    <View style={isActive && styles.activeStyle}>
      <Text>Name</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
    activeStyle : {
        backgroundColor : 'yellow'
    }
})