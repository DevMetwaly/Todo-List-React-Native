
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import Icon from 'react-native-vector-icons/Ionicons';



const TodoList = (props) => {



  return (
    <ScrollView>
      {
        props.tasks.map((taskSection, idx) =>
          <View key={idx} style={styles.root}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>{taskSection.title}</Text>
            </View>
            <View>
              {
                taskSection.tasks.map((task, idx) =>
                  <Swipeout 
                    key={idx}
                    autoClose
                    backgroundColor='transparent'
                    
                    right={[
                      {
                        type:"delete",
                        text: 'DELETE',
                        onPress: () => props.onDelete(task.id)
                      }
                    ]}
                  >
                    <View style={styles.taskView}>
                      <View style={styles.taskTitleView}>
                        <Text style={styles.taskText}>{task.title}</Text>
                      </View>
                      <View style={styles.taskActionView}>
                        <Icon.Button
                          name="ios-checkmark-circle-outline"
                          backgroundColor="white"
                          color="green"
                          size={30}
                          iconStyle={{ marginRight: 0 }}
                          borderRadius={5000}
                          onPress={() => props.onCheck(task.id)}
                        />

                      </View>
                    </View>
                  </Swipeout>

                )}
            </View>
          </View>
        )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 0,

  },
  titleView: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  },
  titleText: {
    fontSize: 20,
    textTransform: 'capitalize'
  },
  taskView: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    paddingLeft: 30,
    paddingRight: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  taskTitleView: {
    flex: 1,
    justifyContent: 'center',
  },
  taskActionView: {
    flex: 0,
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },
  taskText: {
    fontSize: 18,
    textTransform: 'capitalize'
  },

});




export default TodoList;