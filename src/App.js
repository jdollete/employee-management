import React from 'react';
import firebase from 'firebase';
import { Text, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
