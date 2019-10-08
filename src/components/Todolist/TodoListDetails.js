
import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

import { View } from 'react-native-animatable';
import { Surface } from 'react-native-paper';
import TodoListItem from './TodoListItem';

const TodoListDetails = (props) => {

    const task = props.navigation.getParam('task')
    const onCheck = props.navigation.getParam('onCheck')
    const onDelete = props.navigation.getParam('onDelete')
    const onSelect = props.navigation.getParam('onSelect')
    const details = []
    Object.entries(task).forEach(
        ([key, value], idx) =>
            details.push(
                <View key={idx} style={styles.row}>
                    <View style={styles.key}>
                        <Text style={styles.keyText}>{key}:</Text>
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.taskDescriptionText}>{value}</Text>
                    </View>
                </View>)
    )
    return (
        <View style={styles.root}>
            <View style={styles.baner}></View>
            <Surface style={styles.surface}>
                <Text style={styles.taskTitleView}>{task.title}</Text>
            </Surface>
            <View style={styles.details}>


                {details}


            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 0,
        alignItems: 'center'
    },
    baner: {
        flex: 0,
        height: 50,
        backgroundColor: 'gold',
        width: '100%'
    },
    taskTitleView: {
        fontSize: 25,
        textTransform: 'uppercase'
    },
    surface: {
        marginTop: -50,
        padding: 8,
        height: 100,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        borderRadius: 5,
    },
    details: {
        alignItems: 'flex-start',
        width: '80%',
        paddingTop: 30,
        paddingBottom: 30,
    },
    key: {
        flex: 1,
        paddingRight: 5
    },
    keyText: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    value: {
        flex: 2,
        paddingLeft: 5,
    },
    taskDescriptionText: {
        fontSize: 18
    },
    row: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    }
});

export default TodoListDetails