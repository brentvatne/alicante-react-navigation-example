import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import SearchLayout from 'react-navigation-addon-search-layout';

export default class SearchScreen extends React.Component {
  state = {
    searchText: '',
  };

  render() {
    return (
      <SearchLayout
        headerBackgroundColor="#fff"
        headerTintColor="#000"
        onChangeQuery={this._handleQueryChange}
        onSubmit={this._executeSearch}>
        <ScrollView
          style={{ flex: 1, backgroundColor: '#fafafa' }}
          contentContainerStyle={{ padding: 20 }}>
          <Text>{this.state.searchText}</Text>
        </ScrollView>
      </SearchLayout>
    );
  }

  _handleQueryChange = searchText => {
    this.setState({ searchText });
  };

  _executeSearch = async () => {
    alert('search!');
  };
}
