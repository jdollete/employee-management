import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStore()}>
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
