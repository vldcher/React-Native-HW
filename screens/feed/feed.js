import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { fetchMovies } from './../../api';
import MoviesList from './../../components/moviesList'; // can be shortened. import from index
import Spinner from './../../components/spinner';
import sharedStyle from './../../shared/style';

export default class FeedScreen extends Component {

  state = {
      loading: false,
      refreshing: false,
      data: null,
      year: '',
      errorMessage: false,
  }

  validateYearInput = () => {
    let { year } = this.state;
    (+year > 1939 && +year < 2020) ? this.onButtonPress() : this.setState({errorMessage: true});
  }

  onButtonPress = () => {
      this.setState({data:null, loading: true});
      year = this.state.year; // const { year } = this.state;
      fetchMovies(year)
        .then(res => {
            this.setState({loading:false, data:res, year: ''});
        })
        .catch( err => {
            console.log(error); // err
            this.setState({loading:false});
        });
  };



  render() {
    const { loading, data, year, errorMessage } = this.state;
    let date = new Date().toTimeString().slice(0,9); // new Date().toLocaleTimeString()

    return (
     <SafeAreaView style={sharedStyle.container}>

        {loading && (
          <Spinner/>
        )}

        {!data && !loading && (
          <TouchableOpacity
            onPress={this.onButtonPress}
          >
            <Text style={sharedStyle.buttonLabel}>Find Movies</Text>
          </TouchableOpacity>
        )}

        { data &&
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.loading}
                onRefresh={this.onButtonPress}/>}>

        <Text style = {sharedStyle.timeLabel}>Last Updated {date} </Text>

        <Text style={sharedStyle.searchLabel}>Search the movies by year:</Text>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 0.5}}
          onChangeText={(year) => this.setState({year: year, errorMessage: false})}
          clearTextOnFocus = {true}
          value={this.state.year}
        />

        <TouchableOpacity onPress={this.validateYearInput}>
          <Text style={sharedStyle.buttonLabel}>SEARCH</Text>
        </TouchableOpacity>

        {errorMessage &&
          <Text style={sharedStyle.errorMessage}>Please type year from 1940 to 2019.</Text>
        }

        <MoviesList data={data} navigation = {this.props.navigation} />

        </ScrollView>
      }
      </SafeAreaView>
    );
  }
}
