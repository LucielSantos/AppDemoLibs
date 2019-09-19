import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

import styles from './styles';

export default function ButtonLottie() {
  return (
    <TouchableOpacity style={ styles.button }>
        <Image
          source= { require('../../assets/lottieLogo/lottie.png') }
          style={ styles.img }
        /> 
    </TouchableOpacity>
  );
}
