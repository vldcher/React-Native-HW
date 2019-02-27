import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

class  SearchMovies extends Component { 

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

export default SearchMovies;