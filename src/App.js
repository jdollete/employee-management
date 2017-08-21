import React from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD5jXcxClaFNHq997oSgacsFawWrqFzFzM',
      authDomain: 'employee-manager-e77d1.firebaseapp.com',
      databaseURL: 'https://employee-manager-e77d1.firebaseio.com',
      projectId: 'employee-manager-e77d1',
      storageBucket: 'employee-manager-e77d1.appspot.com',
      messagingSenderId: '779442916990'
    }

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
