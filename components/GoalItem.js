import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        color: 'rgba(45,45,3,1.0)',
        padding: 10,
        margin: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default GoalItem;