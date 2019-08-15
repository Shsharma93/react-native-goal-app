import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function FlexBox() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        height: 300,
        margin: '5%',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          flex: 2,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text> 1</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text> 3</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text> 3</Text>
      </View>
    </View>
  );
}
