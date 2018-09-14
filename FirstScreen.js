import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'expo';
import { BorderlessButton } from 'react-native-gesture-handler';

class SearchButton extends React.Component {
  render() {
    return (
      <BorderlessButton
        style={{ marginRight: 15 }}
        onPress={() => this.props.navigation.navigate('Search')}>
        <Icon.Ionicons size={23} name="ios-search" color="#000" />
      </BorderlessButton>
    );
  }
}

export default class FirstScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Screen 1',
    headerRight: <SearchButton navigation={navigation} />,
  });

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
