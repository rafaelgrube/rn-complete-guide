import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputdHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputdHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "50%"
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%"
  },

  inputContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    padding: 10,
    width: "80%",
  }
});

export default GoalInput;
