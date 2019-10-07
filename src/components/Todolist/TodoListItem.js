
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableRipple } from 'react-native-paper';


class TodoListItem extends React.Component {
    state = {
        animate: new Animated.Value(1),
    }

    _transition = (callback) => {
        Animated.timing(this.state.animate, {
            toValue: 0,
        }).start(() => {
            callback()
            this.setState({ animate: new Animated.Value(1) })
        });
    }
    render() {
        const props = this.props

        return (
            <Animated.View key={props.task.id} style={{ opacity: this.state.animate }}>
                <Swipeout

                    autoClose
                    backgroundColor='transparent'
                    right={[
                        {
                            type: "delete",
                            text: 'DELETE',
                            onPress: () => this._transition(() => props.onDelete(props.task.id))
                        }
                    ]}
                >
                    <TouchableRipple onPress={() => props.onSelect(props.task.id)}>
                        <View style={styles.taskView}>
                            <View style={styles.taskTitleView}>
                                <Text style={styles.taskText}>{props.task.title}</Text>
                            </View>
                            <View style={styles.taskActionView}>
                                <Icon.Button
                                    name="ios-checkmark-circle-outline"
                                    backgroundColor="white"
                                    color="green"
                                    size={30}
                                    iconStyle={{ marginRight: 0 }}
                                    borderRadius={5000}
                                    onPress={() => this._transition(() => props.onCheck(props.task.id))}
                                />

                            </View>
                        </View>
                    </TouchableRipple>
                </Swipeout>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({

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




export default TodoListItem;