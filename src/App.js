import React from 'react';
import firebase from 'firebase';
import { Text, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

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
    const { viewStyle } = styles
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <View style={viewStyle}>
          <Header headerText="Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create ({
  viewStyle: {
    backgroundColor: '#0184FF',
    flex: 1
  }
});

export default App;
