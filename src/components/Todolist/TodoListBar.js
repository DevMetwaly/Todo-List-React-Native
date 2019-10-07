
import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';


import { TouchableRipple } from 'react-native-paper';



const TodoListBar = (props) => {
    console.log(props.bars)
    return (
        <View style={styles.root}>

            {
                props.bars.map((bar, idx) =>
                    <TouchableRipple
                        key={idx}
                        style={props.activeIdx === idx ? styles.activeBar : styles.bar}
                        onPress={() => props.onPress(idx)}
                    >
                        <View style={ styles.row }>
                            <View style={{ justifyContent:"center" }}>
                                <Text style={props.activeIdx === idx ? styles.activeText : styles.text}>{bar.title}</Text>
                            </View>
                            <View style={{ justifyContent:"center", paddingLeft:5 }}>
                                <Text style={styles.countText}>({bar.count})</Text>
                            </View>
                        </View>
                    </TouchableRipple>)
            }
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bar: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'gold',
    },
    activeBar: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'gold',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    activeText: {
        fontSize: 20,
        textTransform: 'uppercase'
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase'
    },
    countText: {
        fontSize: 14,
        color: 'gray'

    },
    row: {
        flexDirection: 'row',
    }
});



export default TodoListBar;