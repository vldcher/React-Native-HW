import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class FirstScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
    this.getSelectedImages = this.getSelectedImages.bind(this);
  }

  getSelectedImages(images) {
    this.setState({
      selected: images,
    });
  }

  render() {
    let { selected }  = this.state;

    return (
      <View style={ styles.container }>

        <View style={ styles.content }>
          <Text style={ styles.text }>
             Please choose only 1 Media
          </Text>
        </View>    

        <CameraRollPicker
          groupTypes='All'
          selected={this.state.selected}
          assetType='All'
          selectSingleItem
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages} />

        <Text style={ styles.text }>
            Selected Media
        </Text>

        { !selected[0] && 
          <View style={ styles.mediaInput }>
            <Image
              source={{ uri: 'https://www.companyshop.co.uk/media/1017/media-placeholder.jpg' }}
              style={{ width: '100%', height: '100%' }}/>
          </View> }

        { selected[0] &&
        <View style={ styles.mediaInput }>
          <ImageBackground source={{ uri: selected[0].uri }} style={{width: '100%', height: '100%' }}/>   
        </View> }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  mediaInput: {
    height: 300,
    opacity: 0.7
  },
  content: {
    marginTop: 30,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#d90091',
    color: 'grey'
  },
});
