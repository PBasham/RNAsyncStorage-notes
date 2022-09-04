/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { StyleSheet, Text, TextInput, View, StatusBar, Dimensions } from 'react-native'
// AsyncStorage!!! WooHoo!!
import AsyncStorage from "@react-native-async-storage/async-storage"
/*========================================
Import Styling / Misc
========================================*/
import colors from "../misc/colors"
/*========================================
        Import Components
========================================*/
import { RoundIconBtn } from "../components/RoundIconBtn"

export const Intro = ({onFinish}) => {

    const [name, setName] = useState("") // State to keep track of the current user from the input field

    const handleOnChangeText = text => setName(text) // updates the username as it is being typed.

    const handleSubmit = async () => {
        const user = { name: name}
        await AsyncStorage.setItem("user", JSON.stringify(user))
        if(onFinish) onFinish()
    }

    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.inputTitle} >Enter Your Name to Contunue</Text>
                <TextInput
                    value={name}
                    onChangeText={handleOnChangeText}
                    placeholder="Enter Name"
                    style={styles.textInput}
                />
                {name.trim().length >= 3 ? <RoundIconBtn antIconName="arrowright" onPress={handleSubmit}/> : null}
            </View>
        </>
    )
}


/*========================================
        Variables
========================================*/
const width = Dimensions.get("window").width - 50
console.log("width: ", width)
/*========================================
        StyleSheet
========================================*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        marginBottom: 15,
        paddingLeft: 15,
        width,
        height: 50,
        color: colors.PRIMARY,
        fontSize: 25,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.PRIMARY,
    },
    inputTitle: {
        alignSelf: "flex-start",
        marginBottom: 5,
        paddingLeft: 25,
        opacity: 0.5,
    }
})