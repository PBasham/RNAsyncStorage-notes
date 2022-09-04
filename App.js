/*========================================
        Import Dependencies
========================================*/
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
// AsyncStorage!! Woohoo!!
import AsyncStorage from "@react-native-async-storage/async-storage";
/*========================================
        Import Screens / Components
========================================*/
import { Intro } from "./app/screens/Intro";
import { NoteScreen } from "./app/screens/NoteScreen";


export default function App() {
    const [user, setUser] = useState({})
    const findUser  = async () => {
        const result = await AsyncStorage.getItem("user")
        setUser(JSON.parse(result))
    }

    useEffect(() => {
        findUser()
    }, [])

    // return <Intro />
    return <NoteScreen user={user}/>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
