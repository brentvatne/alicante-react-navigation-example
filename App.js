import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { AppLoading, Asset } from 'expo';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import SearchScreen from './SearchScreen';

import { useScreens } from 'react-native-screens';
useScreens();

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
    headerTransitionPreset: 'uikit',
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

const BottomTabs = createBottomTabNavigator({
  tabOne: StackOne,
  tabTwo: StackTwo,
});

const Navigation = createStackNavigator(
  {
    BottomTabs,
    Search: SearchScreen,
  },
  {
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
      },
    }),
  }
);

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
