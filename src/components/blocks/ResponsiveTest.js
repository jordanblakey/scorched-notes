import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ResponsiveTest extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'red'
  }
})
