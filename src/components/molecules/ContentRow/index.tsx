import TextComp from 'atoms/TextComp';
import React from 'react';
import {View, StyleSheet, ViewStyle, Text} from 'react-native';

export interface IContentRow {
  title: string;
  content: string | number;
  style?: ViewStyle;
}

const ContentRow = ({title, content, style}: IContentRow): JSX.Element => {
  return (
    <View style={[styles.container, {...style}]}>
      <TextComp
        text={title}
        text_style={{fontWeight: '600'}}
        style={{marginLeft: 10, width: '30%'}}
      />
      <TextComp
        text={content}
        style={{
          marginLeft: 10,
          maxWidth: '60%',
        }}
      />
    </View>
  );
};

export default ContentRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 3,
  },
});
