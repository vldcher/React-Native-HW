import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import style from './style';

export class MovieThumb extends Component { 

  render() {
    const { Poster, Title } = this.props.item;

    return (
        <TouchableOpacity 
            onPress = {() => this.props.navigation.navigate('Details', {
                    item: this.props.item
                })
            } 
            style = {styles.container}
        >
            <Image 
                style = { style.image }
                source = {{ uri: Poster }}
                resizeMode = "contain"/>
            <Text>{ Title }</Text>
        </TouchableOpacity>
    )
  }
}
