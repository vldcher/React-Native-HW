import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default class MovieDetails extends Component {

  render() {

    const {item} = this.props.navigation.state.params; // const { navigation: { state: { params: { item: { Poster, Title, Year } } } } = this.props; is preferable

    console.log(item.Poster); //remove

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> // move to style object
        <ScrollView>
             <Image
                style = {styles.image}
                source = {{uri: item.Poster}}
                resizeMode = "contain"/>
            <Text style = {styles.title}>{item.Title}</Text>
            <Text style = {styles.paragraph}>Description: </Text>
            <Text style = {styles.paragraph}>Year: {item.Year}</Text>
        </ScrollView>
        </View>
    );
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
        height: 300,
        margin: 20
    },
    title: {
        margin: 20,
        fontSize: 14,
        fontWeight: 'bold',

    },
    paragraph: {
        margin: 10
    }
}); // better to store styles in separate file
