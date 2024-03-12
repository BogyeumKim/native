import {Text, View} from 'react-native';

type Props = {
    name : string
}

function Profile({name} : Props) {
  return (
    <View>
      <Text>Name</Text>
    </View>
  );
}

export default Profile;
