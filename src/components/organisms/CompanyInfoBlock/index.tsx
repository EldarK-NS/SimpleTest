import Heading from 'atoms/Heading';
import ContentRow from 'molecules/ContentRow';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ViewStyle, Pressable} from 'react-native';

export interface ICompanyInfoBlock {
  name: string;
  catchPhrase: string;
  bs: string;
  title: string;
  style?: ViewStyle;
}

const CompanyInfoBlock = ({
  name,
  catchPhrase,
  bs,
  title,
  style,
}: ICompanyInfoBlock): JSX.Element => {
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
          <ContentRow title={'name:'} content={name} />
          <ContentRow title={'catchPhrase:'} content={catchPhrase} />
          <ContentRow title={'bs:'} content={bs} />
        </>
      ) : null}
    </View>
  );
};

export default React.memo(CompanyInfoBlock);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 5,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  icon: {fontWeight: 'bold', fontSize: 16},
});
