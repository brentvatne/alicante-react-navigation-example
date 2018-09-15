import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

export default class SecondScreen extends Component {
  static navigationOptions = {
    title: 'Screen 2',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Greetings from the second screen!</Text>
        <Button
          title="Go to first"
          onPress={() => {
            this.props.navigation.push('First');
          }}
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
