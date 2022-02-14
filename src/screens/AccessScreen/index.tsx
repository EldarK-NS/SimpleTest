import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PhotosNavigatorParamsList} from 'nav/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AccessComponent from 'templates/AccessComponent';

export interface IAccessScreenProps {
  navigation: NativeStackNavigationProp<PhotosNavigatorParamsList, 'Auth'>;
}

const AccessScreen: React.FC<IAccessScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AccessComponent navigation={navigation} />
    </View>
  );
};

export default React.memo(AccessScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
  },
});
