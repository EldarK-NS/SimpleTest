import React, {useContext, useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import {AppContext} from 'context/App';
import CachedImage from 'atoms/CachedImage';

const Photos: React.FC = () => {
  const {
    stores: {photoStore},
  } = useContext(AppContext);

  useEffect(() => {
    photoStore.getPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={toJS(photoStore.photos)}
        numColumns={4}
        renderItem={({item}) => (
          <View>
            <Text
              style={{
                fontWeight: '600',
                alignSelf: 'center',
                position: 'absolute',
                top: 30,
                zIndex: 2,
              }}>{`albumId ${item.albumId}`}</Text>
            <Image
              source={{uri: item.url}}
              resizeMode="contain"
              style={{width: 100, height: 100}}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default observer(Photos);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
