/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import colors from "../misc/colors"
/*========================================
        Import Components
========================================*/

export const NoteScreen = ({user}) => {

    const [greet, setGreet] = useState("Evening")

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT}/>
            <View>
                <Text>{`Good ${greet} ${user.name}`}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})