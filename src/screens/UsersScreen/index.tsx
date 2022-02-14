import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import UsersCards from 'templates/UsersCards';
import {TabNavigatorParamsList} from 'nav/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export interface IUserScreenProps {
  navigation: BottomTabNavigationProp<TabNavigatorParamsList, 'Users'>;
}

export const UsersScreen: React.FC<IUserScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <UsersCards />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#F5F6FA',
  },
});

export default UsersScreen;
