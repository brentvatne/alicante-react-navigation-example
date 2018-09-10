import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { AppLoading, Asset } from 'expo';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

const StackOne = createStackNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen,
  },
  {
    initialRouteName: 'First',
    headerTransitionPreset: 'uikit',
  }
);

StackOne.navigationOptions = {
  tabBarLabel: 'Tab 1',
  tabBarIcon: ({ tintColor, horizontal }) => (
    <FontAwesome
      color={tintColor}
      size={horizontal ? 20 : 30}
      name="check-circle"
    />
  ),
};

const StackTwo = createStackNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen,
  },
  {
    initialRouteName: 'Second',
    headerTransitionPreset: 'fade-in-place',
  }
);

StackTwo.navigationOptions = {
  tabBarLabel: 'Tab 2',
  tabBarIcon: ({ tintColor, horizontal }) => (
    <FontAwesome
      color={tintColor}
      size={horizontal ? 20 : 30}
      name="question-circle"
    />
  ),
};

const Navigation = createBottomTabNavigator({
  tabOne: StackOne,
  tabTwo: StackTwo,
});

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  _loadAssetsAsync = async () => {
    await Promise.all([
      Asset.loadAsync(
        require('react-navigation/src/views/assets/back-icon.png')
      ),
      Asset.loadAsync(
        require('react-navigation/src/views/assets/back-icon-mask.png')
      ),
    ]);
  };

  render() {
    if (this.state.loaded) {
      return <Navigation />;
    } else {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={console.error}
          onFinish={() => this.setState({ loaded: true })}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
