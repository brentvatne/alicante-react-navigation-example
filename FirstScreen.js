import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

export default class FirstScreen extends Component {
  static navigationOptions = {
    title: 'Screen 1',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello from the first screen!</Text>
        <Button
          title="Go to second"
          onPress={() => this.props.navigation.push('Second')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
