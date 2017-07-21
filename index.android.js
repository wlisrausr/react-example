/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class ReactExample extends Component {
  state = {
    colors: 'red'
  };

  componentWillMount() {
    console.log('In componentWillMount');
  }

  componentDidMount() {
    console.log('In componentDidMount');
  }

  componentWillUnmount() {
    console.log('In componentWillUnmount');
  }

  changeColor = (color) => {
    this.setState({
      colors: color
    });
  }

  render() {
    console.log('In render');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>

        <Button title={'Klik'} onPress={() => this.changeColor('green')} />

        <TriggerComponent
          parentColor={this.state.colors}
        />
      </View>
    );
  }
}

class TriggerComponent extends Component {
  state = {
    text: 12
  };

  componentWillReceiveProps(prevProps) {
    console.log(prevProps);

    if (this.props.parentColor !== prevProps) {
      this.setState({ text: 25 });
    }
  }

  render() {
    return (
      <View>
          <Text style={{ fontSize: this.state.text }}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
      </View>
    )
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
});

AppRegistry.registerComponent('ReactExample', () => ReactExample);
