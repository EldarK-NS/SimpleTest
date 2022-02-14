import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PhotosNavigatorParamsList} from 'nav/types';
import AccessScreen from 'screens/AccessScreen';
import PhotosScreen from 'screens/PhotosScreen';

const Stack = createNativeStackNavigator<PhotosNavigatorParamsList>();

const PhotoStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AccessScreen} />
      <Stack.Screen name="PhotosData" component={PhotosScreen} />
    </Stack.Navigator>
  );
};

export default PhotoStack;
