import React, {Fragment} from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default App;