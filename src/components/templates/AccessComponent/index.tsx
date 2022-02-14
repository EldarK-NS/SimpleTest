import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DefaultButton from 'atoms/DefaultButton';
import TextComp from 'atoms/TextComp';
import InputComponent from 'molecules/InputComponent';
import {PhotosNavigatorParamsList} from 'nav/types';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, View, Alert} from 'react-native';

export interface IAccessComponentProps {
  navigation: NativeStackNavigationProp<PhotosNavigatorParamsList, 'Auth'>;
}

const AccessComponent: React.FC<IAccessComponentProps> = ({navigation}) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [error, setError] = useState<boolean>(false);

  const checkAccess = () => {
    if (login === 'admin' && password === 'admin') {
      navigation.navigate('PhotosData');
      setLogin('');
      setPassword('');
    } else {
      setError(true);
    }
  };

  if (error) {
    Alert.alert('Invalid Login or Password', 'Try again', [
      {
        text: 'OK',
        onPress: () => {
          setError(false);
          setLogin('');
          setPassword('');
        },
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <InputComponent
        placeholder={'please insert login'}
        setInput={setLogin}
        input={login}
        title={'Login'}
      />
      <InputComponent
        placeholder={'please insert password'}
        setInput={setPassword}
        input={password}
        title={'Password'}
      />
      <DefaultButton
        onpress={checkAccess}
        Style={{
          backgroundColor: 'blue',
          width: 120,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <TextComp
          text={'Confirm'}
          text_style={{color: '#FFFFFF', padding: 10, alignSelf: 'center'}}
        />
      </DefaultButton>
    </View>
  );
};

export default AccessComponent;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
  },
});
