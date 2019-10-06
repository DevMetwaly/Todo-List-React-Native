
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Footer = (props) => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Made By Metwally</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 0,
        backgroundColor:'gold',
        paddingLeft: 50,
        height: 30,
        justifyContent:'center'
    },
    text: {
        fontSize: 14
    }
});

export default Footer