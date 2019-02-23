import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default class MoviesThumb extends Component { 

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
                style = { styles.image }
                source = {{ uri: Poster }}
                resizeMode = "contain"/>
            <Text>{ Title }</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        borderColor: 'blue',
        marginVertical: 15,
        borderRadius: 6,
    },
    image: {
        flex: 1,
    },
});
  