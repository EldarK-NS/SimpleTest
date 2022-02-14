import TextComp from 'atoms/TextComp';
import InputConponent from 'molecules/InputComponent';
import React from 'react';
import {View} from 'react-native';

export interface IInputBlock {}

const InputBlock = () => {
  return (
    <>
      <TextComp />
      <InputConponent />
    </>
  );
};
