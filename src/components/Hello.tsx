import * as React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ViewStyle = __React.ViewStyle;
import TextStyle = __React.TextStyle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as ViewStyle,

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  } as TextStyle,

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  } as ViewStyle

});

class Hello extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

export default Hello;