import React, {useCallback, useContext, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {FlatList} from 'react-native-gesture-handler';
import {observer} from 'mobx-react';

import {AppContext} from 'context/App';

import Photos from 'templates/Photos';

const FilterModal = () => {
  const {
    stores: {photoStore},
  } = useContext(AppContext);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  const handleSheetChanges2 = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const albums = new Array(100);

  // renders
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Pressable style={styles.button} onPress={() => handleSheetChanges(0)}>
          <Text>Filter</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleSheetChanges2();
            photoStore.getPhotos();
          }}>
          <Text>Show All</Text>
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <Photos />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={close}>
        <BottomSheetView style={styles.contentContainer}>
          <FlatList
            data={albums}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  handleSheetChanges2();
                  photoStore.getAlbum(index + 1);
                }}
                style={{
                  borderBottomWidth: 0.4,
                  borderBottomColor: 'black',
                }}>
                <Text
                  style={{
                    width: '100%',
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: '600',
                    paddingVertical: 7,
                  }}>
                  Album {index + 1}
                </Text>
              </Pressable>
            )}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
  },
  button: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 7,
    marginVertical: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default observer(FilterModal);
