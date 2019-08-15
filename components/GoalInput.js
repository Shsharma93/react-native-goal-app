import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter the goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='ADD' onPress={() => onAddGoal(enteredGoal)} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  }
});
