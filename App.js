/*========================================
        Import Dependencies
========================================*/
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
// AsyncStorage!! Woohoo!!
import AsyncStorage from "@react-native-async-storage/async-storage";
// React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
/*========================================
        Import Screens / Components
========================================*/
import { Intro } from "./app/screens/Intro";
import { NoteScreen } from "./app/screens/NoteScreen";
import { NoteDetail } from "./app/components/NoteDetail";
import { NoteProvider } from "./app/contexts/NoteProvider";

const Stack = createNativeStackNavigator()

export default function App() {
    const [user, setUser] = useState({})
    const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false)
    const findUser = async () => {
        const result = await AsyncStorage.getItem("user")

        if (result === null) return setIsAppFirstTimeOpen(true)

        setUser(JSON.parse(result))
        setIsAppFirstTimeOpen(false)
    }

    useEffect(() => {
        findUser()
    }, [])

    // functions for rendering routes with props.
    const renderNoteScreen = (props) => <NoteScreen {...props} user={user} />

    // return starts here
    if (isAppFirstTimeOpen) return <Intro onFinish={findUser} />
    return <NavigationContainer>
        <NoteProvider>
            <Stack.Navigator screenOptions={{ headerTitle: "", headerTransparent: true }}>
                <Stack.Screen component={renderNoteScreen} name="NoteScreen" />
                <Stack.Screen component={NoteDetail} name="NoteDetail" />
            </Stack.Navigator>
        </NoteProvider>
    </NavigationContainer>
}

/*========================================
        StyleSheet
========================================*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
