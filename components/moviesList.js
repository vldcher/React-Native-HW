import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import MovieThumb from './movieThumb';

export default class MoviesList extends Component { 

  constructor(props) {
    super(props);
  }

  renderMovieThumbNail = (item, index) => (
    <MovieThumb key={index} item = {item} navigation = {this.props.navigation}/>
  );

  render() {
    const { data } = this.props;
    
    if (!data || !data.length) return null;
    return (
      <View>
        <ScrollView>
            {data.map(this.renderMovieThumbNail)}
        </ScrollView>  
      </View>
    );
  }
}