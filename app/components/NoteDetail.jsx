/*========================================
        Import Dependencies
========================================*/
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useHeaderHeight } from "@react-navigation/elements"
import colors from "../misc/colors"
import { RoundIconBtn } from "./RoundIconBtn"

export const NoteDetail = (props) => {

    /*==== Variables ====*/
    const { note } = props.route.params
    const headerHeight = useHeaderHeight()

    /*==== useState ====*/

    /*==== useEffect ====*/

    /*==== Functions START ====*/
    const formatDate = ms => {
        const date = new Date(ms)
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const hrs = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`
    }
    /*==== Functions END ====*/

    // Return for component starts here.
    return (
        <ScrollView contentContainerStyle={[styles.container, { paddingTop: headerHeight }]}>
            <Text style={styles.time} >{`Created at ${formatDate(note.time)}`}</Text>
            <Text style={styles.title} >{note.title}</Text>
            <Text style={styles.desc} >{note.desc}</Text>

            <View style={styles.btnContainer}>
                <RoundIconBtn antIconName="delete" style={{
                    backgroundColor: colors.ERROR,
                    marginBottom: 15,
                }}
                onPress={() => console.log("deleting note")}
                />
                <RoundIconBtn antIconName="edit" />
            </View>
        </ScrollView>
    )
}

/*========================================
        StyleSheet
========================================*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 30,
        color: colors.PRIMARY,
        fontWeight: "bold",
    },
    desc: {
        fontSize: 20,
        opacity: 0.6,
    },
    time: {
        textAlign: "right",
        fontSize: 16,
        opacity: 0.5,
    },
    btnContainer: {
        position: "absolute",
        right: 50,
        bottom: 50,
    }
})