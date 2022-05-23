import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function Home() {

    const navigation = useNavigation();
    const toAbout = () => navigation.navigate('About', {name: 'Mateus'});
    return(
        <View style={styles.container}> 
            <Text style={styles.text}>Home</Text>
            <TouchableOpacity style={styles.button} onPress={toAbout}>
                <Text style={styles.buttonText}>Go to Login</Text>
            </TouchableOpacity> 
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#4286f4',
        padding: 10,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})