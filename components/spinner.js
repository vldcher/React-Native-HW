import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Spinner extends Component { 

  rotate = new Animated.Value(0);

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.rotate, {
        toValue: 360,
        duration: 1500,
      }),
    ).start()
  }

  render() {

    return (
        <Animated.Image
          source={require('../spinner.png')}
          style={{
            height: 80,
            width: 70,
            transform: [{ rotate: this.rotate.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg'],
                }) 
            }],
          }}
        />
    )
  }
}