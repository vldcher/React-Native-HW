// rename file to something more meaningful

import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class FirstScreen extends Component {

    // you can omit constructor. Just state = { selected: [] }. And bindings will turn about to arrow functions.

    constructor(props) {
        super(props);
        this.state = {
            selected: [],
        };
        this.getSelectedImages = this.getSelectedImages.bind(this);
    }

    getSelectedImages(images) { // naming. Why get if it is look like set? Besides, use arrow function and you can get rid of explicit binding in constructor.
        this.setState({
            selected: images,
        });
    }

    render() {
        let { selected } = this.state; // const

        return (
            <View style={styles.container}>

                <View style={styles.content}>
                    <Text style={styles.text}>
                        Please choose only 1 Media
                    </Text>
                </View>

                <CameraRollPicker
                    groupTypes='All'
                    selected={this.state.selected} // you've already destructured it just "selected"
                    assetType='All'
                    selectSingleItem
                    imagesPerRow={3}
                    imageMargin={5}
                    callback={this.getSelectedImages}/>

                <Text style={styles.text}>
                    Selected Media
                </Text>

                {!selected[0] &&
                <View style={styles.mediaInput}>
                    <Image
                        source={{ uri: 'https://www.companyshop.co.uk/media/1017/media-placeholder.jpg' }} // better to store such data in constants somewhere
                        style={{ width: '100%', height: '100%' }}/> // Don't repeat yourself. Store it in style object
                </View>}

                {selected[0] &&
                <View style={styles.mediaInput}>
                    <ImageBackground
                        source={{ uri: selected[0].uri }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>}


                /* Those conditions can be combined like

                <View style={styles.mediaInput}>
                    {!selected[0] ? (
                            <Image
                                source={{ uri: 'https://www.companyshop.co.uk/media/1017/media-placeholder.jpg' }}
                                style={styles.image}
                            />
                        )
                        : (
                            <ImageBackground
                                source={{ uri: selected[0].uri }}
                                style={styles.image}
                            />
                        )}
                </View>

                But it is preferable to move this logic to separate component or method
                */

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    mediaInput: {
        height: 300,
        opacity: 0.7,
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
        color: 'grey',
    },
});
