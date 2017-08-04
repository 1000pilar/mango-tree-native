import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Modal,
  TouchableHighlight
} from 'react-native';

class Bye extends Component {
  constructor(props){
    super (props)
    this.state = {
      gambar: '',
      answer: '',
      modalVisible: false
    }

  }

 componentWillMount(){
   console.log('inijalan');
 }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You Just found Grost And He's dead'
          He's old anyway
        </Text>
        <Image
          source={require('../assets/4.png')}
        />
        <View>
        <Text style={styles.welcome}>
          Game Over
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})


export default Bye
