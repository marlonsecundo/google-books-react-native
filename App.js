import React, { Component } from 'react';
import { View } from 'react-native';

import { Home, Search, Book } from './src/screens';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const RootStack = createStackNavigator(
  {
    HomeScreen: Home,
    SearchScreen: Search,
    BookScreen: Book,
  },
  {
    initialRouteName: 'HomeScreen',
    mode: 'modal',
    headerMode: 'none',
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={(<View></View>)}>
          <RootStack></RootStack>
        </PersistGate>
      </Provider>
    );
  }
}
