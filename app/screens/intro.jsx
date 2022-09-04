/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { StyleSheet, Text, TextInput, View, StatusBar, Dimensions } from 'react-native'
/*========================================
        Import Styling / Misc
========================================*/
import colors from "../misc/colors"

export const Intro = () => {

    const [user, setUser] = useState("") // State to keep track of the current user from the input field

    const handleOnChangeText = text => setUser(text) // updates the username as it is being typed.



    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.inputTitle} >Enter Your Name to Contunue</Text>
                <TextInput
                    value={user}
                    onChangeText={handleOnChangeText}
                    placeholder="Enter Name"
                    style={styles.textInput}
                />
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