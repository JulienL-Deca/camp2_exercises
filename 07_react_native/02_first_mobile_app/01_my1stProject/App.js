import React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./logoSubea.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class LogoBack extends React.Component {
  render() {
    return (
      <Image
        source={require('./step-backward.svg')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourName: ""
    }
  }

  static navigationOptions = {
    // title: 'Home',
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="INFO"
        color="#000"
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>Home Screen</Text>
        <TextInput
          autoCapitalize='characters'
          placeholder="Type your name!"
          keyboardType={'email-address'}
          onSubmitEditing={(event) => this.setState({yourName: event.nativeEvent.text})}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {name: this.state.yourName})}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
          title: "Welcome " + navigation.getParam("name", 'Give me yourname'),
        };
        // headerLeft: <LogoBack />
  };

  render() {
    const { navigation } = this.props;
    const nameId = navigation.getParam("name", "give your name");
    // const nameId = this.props.navigation.state.params.name;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Name given: {JSON.stringify(nameId)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'papayawhip',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      // headerBackImage: './logoSubea.png'
    },
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
