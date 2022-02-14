import React from 'react';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';

export interface IHeding {
  text: string;
  style?: ViewStyle;
}

const Heading = ({text, style}: IHeding): JSX.Element => {
  return (
    <View style={[styles.container, {...style}]}>
      <Text style={styles.content}>{text}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
