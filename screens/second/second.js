import React, {Component} from 'react';
import {Text, View} from 'react-native';
import sharedStyle from './../../shared/style';


export default class SecondScreen extends Component {
  render() {
    return (
      <View style={sharedStyle.container}>
        <Text>Second</Text>
      </View>
    );
  }
}
