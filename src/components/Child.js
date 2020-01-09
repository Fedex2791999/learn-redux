import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';


class Child extends Component {
    constructor(props) {
        super(props);
       // console.log("Constructor");
    }

    render() {
    //  console.log("child", this.props.counter);
    //  console.log("test:", this.props.test);
      
        return (
            <View>
                <Text style = {styles.text} >{this.props.counter}</Text>
                {/* <Text style = {styles.text} >{this.props.test}</Text> */}
            </View>
        )
    }
}

// lấy state từ store truyền vào component
const mapStateToProps = state => ({
    counter: state.counter,

   
});

export default connect(mapStateToProps, null)(Child);

const styles =StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});