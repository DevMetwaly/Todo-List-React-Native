
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

class TodoListAddForm extends React.Component {
    state = {
        title: '',
        description: '',

    }
    render(){
        return (
            <>
                <View style={styles.container}>
                    <TextInput
                        label='Task Title'
                        type="outlined"
                        value={this.state.title}
                        onChangeText={title => this.setState({ title })}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        label='Task Description'
                        type="outlined"
                        value={this.state.description}
                        onChangeText={description => this.setState({ description })}
                    />
                </View>
                <View style={styles.container}>
                    <Button color='gold' mode="contained">
                        ADD
                    </Button>
                </View>
            </>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingBottom: 10
    },
    

});

export default TodoListAddForm