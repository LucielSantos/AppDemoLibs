import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import logo from '../assets/logoReact/logoReact.png';

const App = () => {
  return (
    <SafeAreaView style={ styles.container }>
        <View style={ styles.header }>
          <Image style={ styles.logoReact } source = { logo }/>

          <View style={ styles.containerHeader } >

            <Text style={ styles.textHeader }>Aplicativo Demo de Libs</Text>
          
          </View>
        </View>
      <ScrollView>
        
        <View style={ styles.content}>
          <TouchableOpacity style={ styles.button }>
            <Text style={ styles.textButton }>AXIOS</Text>

          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;