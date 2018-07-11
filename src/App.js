import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
// console.disableYellowBox = true
console.ignoredYellowBox = ['Setting a timer']

// IMPORT ASSETS
import logo from './assets/img/logo-scorched.png'

// IMPORT COMPONENTS
import TitleBar from './components/elements/TitleBar'
import Login from './components/blocks/Login'
import ToDo from './components/blocks/ToDo'
import ResponsiveTest from './components/blocks/ResponsiveTest'

// START APP COMPONENT
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Animatable.View
        animation="fadeIn"
        duration={400}
        style={styles.appContainer}
      >
        <TitleBar icon={logo} />
        <View style={styles.pageBody}>
          <ToDo />
          <Login />
          <ResponsiveTest />
        </View>
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center'
  },
  pageBody: {
    width: '100%',
    flex: 1,
    padding: 20
  }
})
