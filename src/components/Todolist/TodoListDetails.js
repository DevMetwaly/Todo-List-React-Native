
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { View } from 'react-native-animatable';
import { Surface } from 'react-native-paper';

const TodoListDetails = (props) => {

    const task = props.navigation.getParam('task')
    return (
           <View>
              
               <Text>
                   {task.id}
               </Text>
               <Text>
                   {task.title}
               </Text>
               <Text>
                   {task.description}
               </Text>
           </View>
    )
}


const styles = StyleSheet.create({

});

export default TodoListDetails