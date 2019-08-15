import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItems = ({ item, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
      <View style={styles.listItems}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1
  }
});
