/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
/*========================================
        Import Screens / Components
========================================*/
import { Intro } from "./app/screens/Intro";


export default function App() {

    const findUser  = async () => {
        const result = await AsyncStorage.getItem("user")
        console.log(result)
    }

    useEffect(() => {
        findUser()
    }, [])

    return <Intro />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
