import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

export default function Lottie() {
  const [ speed, setSpeed ] = useState(1);

  function increaseSpeed(){
    setSpeed(speed+0.1);
  }

  function decreaseSpeed(){
    if( speed > 0){
      setSpeed(speed-0.1);
    }
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.containerTitle }>
        <Text style={ styles.title }>Exemplo Usando Lottie</Text>
      </View>

      <View style={ styles.content }>
        <LottieView style={ styles.lottie } source= { require('../../assets/lottie/lottie.json') } autoPlay loop />

        <LottieView style={ styles.astronauta } source= { require('../../assets/lottie/runing.json') } autoPlay loop speed= { speed }/>
        
        <View style={ styles.controls }>
          <Text style={ styles.instruction }>Controle e Astronauta!</Text>

          <View style={ styles.containerButton }>
            <TouchableOpacity style={ styles.button } onPress= { () => decreaseSpeed() }>
              <Text style={ styles.textButton }>Mais Devagar :(</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.button } onPress= { () => increaseSpeed() }>
              <Text style={ styles.textButton }>Mais Rápido! :)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
