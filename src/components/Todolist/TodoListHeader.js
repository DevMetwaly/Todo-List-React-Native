
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';


import { Appbar } from 'react-native-paper';



const TodoListHeader = (props) => {

    return (
        <Appbar.Header>
            <Appbar.Content title="Todo" primary/>
            <Appbar.Action icon="search" /*onPress={this._onSearch}*/ />
        </Appbar.Header>
    )
}


export default TodoListHeader;