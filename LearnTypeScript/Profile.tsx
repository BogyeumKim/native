import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type Props = {
  name: string;
  isActive?: boolean;
  image?: string;
  children: React.ReactNode;
};

function Profile({
  name,
  isActive,
  image = 'https://picsum.photos/200',
  children,
}: Props) {
  return (
    <View style={isActive && styles.activeStyle}>
      <Image source={{uri: image}} />
      <Text>Name</Text>
      <View>{children}</View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
});
