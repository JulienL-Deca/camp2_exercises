import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity, StatusBar, TextInput } from 'react-native';

export class myApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      yourName: ""
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar hidden={true}/>
        <View style={styles.containerAll} >

          <View style={styles.containerHead} >
            <Image
              style={styles.imageHead}
              source={require('./apneasmall.jpg')}
              resizeMode='cover'
            />
          </View>

          <View style={styles.containerBody} >
            <TextInput
              autoCapitalize='characters'
              placeholder="Type your name!"
              keyboardType={'email-address'}
              onSubmitEditing={(event) => this.setState({yourName: event.nativeEvent.text})}
            />
            <Text >Bonjour {this.state.yourName ? this.state.yourName : ' ... (done moi ton nom)' }</Text>

            <Text style={styles.textBody}>My body text goes here</Text>
            <Text style={styles.textBody}>{this.state.counter}</Text>
          </View>

          <View style={styles.containerFooter} >
            <Button
              onPress={() => this.addOne(this.state)}
              title=' + 1 '
              color='lightgreen'
              accessibilityLabel='add one to counter !'
            />

            <Button
              onPress={() => this.removeOne(this.state)}
              title=' - 1 '
              color='yellow'
              accessibilityLabel='Learn more about this purple button'
            />

            <Button
              onPress={() => this.setState({counter: 0})}
              title=' reset '
              color='red'
              accessibilityLabel='Learn more about this purple button'
            />

            <TouchableOpacity
              style={styles.buttonPerso}
              onPress={showAlert}>
              <Text>Last button</Text>
            </TouchableOpacity>

          </View>

        </View>
      </SafeAreaView>
    );
  }

  addOne(props) {
    // console.log(props.counter);
    const newCounter = props.counter + 1;
    this.setState({counter: newCounter});
  }
  removeOne(props) {
    // console.log(props.counter);
    const newCounter = props.counter - 1;
    this.setState({counter: newCounter});
  }
}
function showAlert() {
  alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
}
const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'red'
  },
  containerHead: {
    flex: 1,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'lightgreen'
  },
  imageHead: {
    padding: 0,
    margin: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%'
  },
  textBody: {
    color: 'white',
    fontWeight: 'bold'
  },
  containerBody: {
    justifyContent:'space-around',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    flex: 6.5,
    borderWidth: 1,
    borderColor: 'red'
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    flex: 0.5,
    borderWidth: 1,
    borderColor: 'black'
  },
  buttonPerso: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#DFDFDF',
    padding: 5,
    borderRadius:50
  }
});
