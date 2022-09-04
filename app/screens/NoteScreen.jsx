/*========================================
        Import Dependencies
========================================*/
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import colors from "../misc/colors"
/*========================================
        Import Components
========================================*/

export const NoteScreen = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT}/>
            <View>
                <Text>NoteScreen</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})