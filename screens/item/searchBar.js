import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default class Test extends Component {
  render() {
    return (
      <View style={styles.search}>
        <SearchBar
          height={50}
          fontSize={20}
          fontColor="#fdfdfd"
          iconColor="#fdfdfd"
          shadowColor="#282828"
          cancelIconColor="#fdfdfd"
          placeholder="Search any pieces ..." />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search:{
    paddingTop: 5
  }
})