import TextComp from 'atoms/TextComp';
import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Pressable} from 'react-native';

export interface IInputComponent {
  placeholder: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  title: string;
}

const InputComponent = ({
  placeholder,
  input,
  setInput,
  title,
}: IInputComponent): JSX.Element => {
  const [hide, setHide] = useState<boolean>(true);

  const showContetnt = () => {
    setHide(!hide);
  };
  return (
    <View>
      <TextComp text={title} style={{marginLeft: 20, marginVertical: 8}} />
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#9d9ea6'}
          value={input}
          style={styles.input}
          onChangeText={setInput}
          secureTextEntry={hide}
        />
        <Pressable onPress={showContetnt} style={{marginRight: 10}}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#9d9ea6',
    paddingVertical: 3,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginLeft: 10,
  },
});
