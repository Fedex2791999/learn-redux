export default class StaticCounter extends React.Component {
    static navigationOptions = {
      title: `Same number, wow!`,
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>Hello Bui Quang Huy</Text>
        </View>
      );
    }
  }