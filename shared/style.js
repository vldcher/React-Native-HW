import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  timeLabel: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'gray'
  },
  searchLabel: {
    marginVertical: 10,
    letterSpacing: 1,
  },
  image: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'gray',
  },
  buttonLabel: {
    marginVertical: 10,
    padding: 10,
    width: 100,
    borderWidth: 1,
    borderColor: 'green',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#ed3330',
    borderRadius: 50,
    fontSize: 16,
    letterSpacing: 1,
  },
  
  errorMessage: {
    color: 'gray'
  }
});