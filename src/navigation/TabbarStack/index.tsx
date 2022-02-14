import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorParamsList} from 'nav/types';
import UsersScreen from 'screens/UsersScreen';
import PhotoStack from '../PhotosStack';

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

const TabbarStack = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName="Users"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#4356e6',
        tabBarInactiveTintColor: '#8a8180',
        tabBarStyle: {
          height: 58,
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
      })}>
      <Tab.Screen name="Users" component={UsersScreen} />
      <Tab.Screen
        name="Photos"
        component={PhotoStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabbarStack;
