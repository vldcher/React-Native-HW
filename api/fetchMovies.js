import axios from 'axios';
import { AsyncStorage } from 'react-native';

const apikey = 'a33c2230';
const endpoint = `http://www.omdbapi.com/?apikey=${apikey}&p=1&s=*you*`;
const fakeTimeout = 0;

const fetchMovies = async(year) => {
    let fullEndpoint = (year) ? (endpoint + '&y=' + year) : endpoint;

    try {
        const storedResult = await AsyncStorage.getItem(fullEndpoint);
        if (storedResult !== null) {
            return new Promise(resolve => {
                setTimeout(() => {
                  resolve(JSON.parse(storedResult).Search);
                  console.log()
                }, fakeTimeout);
            })
        }
    } catch (error) {
        console.log('failed to retrieve stored data', error);
    }

    const response = await axios(fullEndpoint);
    try {
        await AsyncStorage.setItem(fullEndpoint, JSON.stringify(response.data));
    } catch(error) {
        console.log(error);
    }
    return response.data.Search;
}

export default fetchMovies;