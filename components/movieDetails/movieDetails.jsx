import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import style from './style';

export class MovieDetails extends Component { 

  render() {

    const { navigation: { state: { params: { item }  }  }  } = this.props;

    return (
        <View style={
            { flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }
          }>
        <ScrollView>
             <Image 
                style = {style.image}
                source = {{uri: item.Poster}}
                resizeMode = "contain"/>
            <Text style = {style.title}>{item.Title}</Text>
            <Text style = {style.paragraph}>Description: </Text>
            <Text style = {style.paragraph}>Year: {item.Year}</Text>
        </ScrollView>
        </View>
    );
  }
}
