import Heading from 'atoms/Heading';
import TextComp from 'atoms/TextComp';
import ContentRow from 'molecules/ContentRow';
import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

export interface IUserNameBlock {
  name: string;
  userName: string;
  email: string;
  style?: ViewStyle;
}

const UserNameBlock = ({
  name,
  userName,
  email,
  style,
}: IUserNameBlock): JSX.Element => {
  return (
    <View style={[styles.container, {...style}]}>
      <Heading text={name} />
      <ContentRow title={'userName:'} content={userName} />
      <ContentRow title={'email:'} content={email} />
    </View>
  );
};

export default React.memo(UserNameBlock);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
});
