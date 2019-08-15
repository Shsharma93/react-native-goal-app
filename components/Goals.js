import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItems from './GoalItems';
import GoalInput from './GoalInput';

const Goals = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.forms}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <GoalItems
            onDelete={() => removeGoalHandler(itemData.item.id)}
            item={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  forms: {
    padding: 50
  }
});
