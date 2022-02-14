import React from 'react';
import {View, Text, ViewStyle, StyleSheet, TextStyle} from 'react-native';

export interface ITextComp {
  text: string | number;
  style?: ViewStyle;
  text_style?: TextStyle;
}

const TextComp = ({text, style, text_style}: ITextComp): JSX.Element => {
  return (
    <View style={[styles.container, {...style}]}>
      <Text style={[styles.content, text_style]}>{text}</Text>
    </View>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    fontSize: 14,
  },
});
