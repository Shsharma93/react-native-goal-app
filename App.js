import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Goals from './components/Goals';

export default function App() {
  const [outputText, setOutputText] = useState(
    'Open up App.js to start working on your app.'
  );
  return (
    <View style={styles.screen}>
      <Goals />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {}
});
