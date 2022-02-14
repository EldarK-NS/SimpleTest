import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppContextProvider} from 'context/App';
import {configure} from 'mobx';
import Root from './navigation';
configure({
  enforceActions: 'never',
});

const App = () => {
  return (
    <AppContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <Root />
      </SafeAreaView>
    </AppContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
