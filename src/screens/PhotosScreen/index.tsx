import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PhotosNavigatorParamsList} from 'nav/types';
import FilterModal from 'organisms/FilterModal';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Photos from 'templates/Photos';

export interface IPhotosScreenProps {
  navigation: NativeStackNavigationProp<
    PhotosNavigatorParamsList,
    'PhotosData'
  >;
}

const PhotosScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FilterModal />
    </View>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
