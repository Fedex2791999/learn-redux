import  React from "react"
import {StyleSheet, View} from "react-native"
import Main from "./src/Main"
import CounterContainer from "./src/components/StaticCounter"
import {createAppContainer, createStackNavigator} from "react-navigation"
import {Provider} from "react-redux"
import store from "./src/store/index"

let RootStack = createStackNavigator({
  Counter: Main,
  StaticCounter: CounterContainer
})

let Navigation = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
