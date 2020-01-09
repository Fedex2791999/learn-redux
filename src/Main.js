import React, {Component} from "react"
import {View, StyleSheet, FlatList, Text} from "react-native"
import Child from "./components/Child"
import ButtonComp from "./components/Button"
// import Loading from "./components/Loading"
// import SignUp from "./components/SignUp"
// import Login from "./components/Login"
import {connect} from "react-redux"
import * as mapDispatchToProps from "./actions"

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  handleIncrease = () => {
    this.props.counterIncrease()
  }

  handleDecrease = () => {
    this.props.counterDecrease()
  }
  handleAddTwo = () => {
    this.props.handleAddTwo()
  }
  handleShowView = () => {
    // console.log(this.props.listView)
    this.setLoggin()
    this.props.handleShowView()
  }

  setLoggin = () => {
    let isLoggedIn = this.state.isLoggedIn
    this.setState({
      isLoggedIn: !isLoggedIn
    })
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Child />
        </View>
        <View style={{flex: 1}}>
          <ButtonComp
            title="Increase"
            textColor="#000"
            bgColor="#397af8"
            onPress={this.handleIncrease}
          />
          <ButtonComp
            title="Decrease"
            bgColor="orange"
            onPress={this.handleDecrease}
          />

          <ButtonComp
            title="Add + 2"
            bgColor="red"
            onPress={this.handleAddTwo}
          />
          <ButtonComp
            title="ShowView"
            bgColor="red"
            onPress={this.handleShowView}
          />
          <ButtonComp
            title="Go to static count screen"
            onPress={() => this.props.navigation.navigate("StaticCounter")}
          />
        </View>

        {isLoggedIn ? (
          <View style={styles.container}>
            <FlatList
              data={this.props.listView}
              renderItem={({item}) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  listView: state.listView
})

// truyền một hàm dispatch để chuyển thành props
export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red"
  },
  btnStyle: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
    backgroundColor: "#15c"
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
