import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabbarStack from './TabbarStack';

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <TabbarStack />
    </NavigationContainer>
  );
};
export default Root;
