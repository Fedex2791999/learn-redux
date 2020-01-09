class Home extends React.Component {
    render() {
      return (
        <Wrapper>
          <Text>Hello!, This is Home!</Text>
          <Button
            title="Go to Profile"
            onPress={() => this.props.navigation.navigate('Profile')}
          />
        </Wrapper>
      )
    }
  }