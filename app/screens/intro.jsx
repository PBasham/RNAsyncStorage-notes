/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, TextInput, View, StatusBar, Dimensions } from 'react-native'
/*========================================
        Import Styling / Misc
========================================*/
import colors from "../misc/colors"

export const Intro = () => {
    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.inputTitle} >Enter Your Name to Contunue</Text>
                <TextInput placeholder="Enter Name" style={styles.textInput} />
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
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        width,
        height: 40,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
    },
    inputTitle: {
        
    }
})