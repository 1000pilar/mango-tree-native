import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
  TouchableHighlight,
  TextInput
} from 'react-native';

import { connect } from 'react-redux'


class Home extends Component {
  constructor(props){
    super (props)
    this.state = {
      name: '',
      plant: ''
    }
    this.setModalVisible = this.setModalVisible.bind(this)

  }

  setModalVisible(visible){
    this.setState({
      modalVisible: visible
    })
  }

 componentWillMount(){
   console.log('inijalan');
   console.log(this.state.image);
 }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Please Enter your Name And Plant you Want To Grow
        </Text>
            {this.state.modalVisible ?
              <TouchableHighlight onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: 'http://www.rugzoom.com/images/plants/29_large_leaf_philodendron_silk_plant.jpg'}}
              />
              </TouchableHighlight>
              :
              <TouchableHighlight onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: 'http://mycrobz.com/wp/wp-content/uploads/plant-care-thumb.png'}}
              />
              </TouchableHighlight>
            }
            <TextInput
          style={{height: 40, width: 200}}
          value={this.state.name}
          placeholder={'input your name'}
          />
          <TextInput
            style={{height: 40, width: 200}}
            value={this.state.plant}
            placeholder={'input your Plant'}
          />
        <Text style={styles.instructions}>
          Click button below to grow your plant
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('Main')}
            title="Grow"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
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


export default Home
