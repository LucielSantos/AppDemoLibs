import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import ButtonLottie from '../components/ButtonLottie'

import styles from './styles';

import logoReact from '../assets/logoReact/logoReact.png';

const App = () => {
  return (
    <SafeAreaView style={ styles.container }>
        <View style={ styles.header }>
          <Image style={ styles.logoReact } source = { logoReact }/>

          <View style={ styles.containerHeader } >

            <Text style={ styles.textHeader }>Aplicativo Demo de Libs</Text>
          
          </View>
        </View>
      <ScrollView>
        
        <View style={ styles.content}>
          {/* Buttons: */}
          <ButtonLottie />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;