/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import Permissions from 'react-native-permissions';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      biometryType: '---',
      errorMessage: '',
      locationPermission: '---'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Touch Id: {this.state.biometryType}</Text>
        <Text style={styles.instructions}>
          error: {this.state.errorMessage}
        </Text>
        <Text style={styles.welcome}>
          Location Permission: {this.state.locationPermission}
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

  componentDidMount() {
    FingerprintScanner.isSensorAvailable()
      .then(biometryType => this.setState({ biometryType }))
      .catch(error => this.setState({ errorMessage: error.message }));
    Permissions.check('location').then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      // Alert.alert('Alert Title', response);

      this.setState({ locationPermission: response });
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
