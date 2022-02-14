import Heading from 'atoms/Heading';
import ContentRow from 'molecules/ContentRow';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ViewStyle, Pressable} from 'react-native';

export interface IAdressBlock {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  title: string;

  style?: ViewStyle;
}

const AddressBlock = ({
  street,
  suite,
  city,
  zipcode,
  phone,
  website,
  title,
  style,
}: IAdressBlock): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.header} onPress={() => setIsActive(!isActive)}>
        <Heading text={title} />
        <View>
          {!isActive ? (
            <Text style={styles.icon}>+</Text>
          ) : (
            <Text style={styles.icon}>-</Text>
          )}
        </View>
      </Pressable>
      {isActive ? (
        <>
          <ContentRow title={'street:'} content={street} />
          <ContentRow title={'suite:'} content={suite} />
          <ContentRow title={'city:'} content={city} />
          <ContentRow title={'zipcode:'} content={zipcode} />
          <ContentRow title={'phone:'} content={phone} />
          <ContentRow title={'website:'} content={website} />
        </>
      ) : null}
    </View>
  );
};

export default React.memo(AddressBlock);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 5,
    borderRadius: 5,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  icon: {fontWeight: 'bold', fontSize: 16},
});
