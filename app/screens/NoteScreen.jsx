/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { Keyboard, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
/*========================================
Import Components
========================================*/
import { NoteInputModal } from "../components/NoteInputModal"
import { RoundIconBtn } from "../components/RoundIconBtn"
import { SearchBar } from "../components/SearchBar"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

export const NoteScreen = ({ user }) => {

    const [greet, setGreet] = useState(greet)

    const [modalVisable, setModalVisable] = useState(false)

    const findGreet = () => {
        const hrs = new Date().getHours()
        if (hrs === 0 || hrs < 12) {
            return setGreet("Morning")
        } else if (hrs === 1 || hrs < 17) {
            return setGreet("Afternoon")
        } else {
            setGreet("Evening")
        }
    }

    const handleOnSubmit = (title, desc) => {
        console.log(title, desc)
    }

    useEffect(() => {
        findGreet()
    }, [])





    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
                    <SearchBar containerStyle={{ marginVertical: 15 }} />
                    <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
                        <Text style={styles.emptyHeader}>Add Notes</Text>
                        <RoundIconBtn
                            onPress={() => setModalVisable(true)}
                            antIconName="plus"
                            style={styles.addBtn}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <NoteInputModal
                visible={modalVisable}
                onClose={() => setModalVisable(false)}
                onSubmit={handleOnSubmit}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        zIndex: 1
    },
    header: {
        fontSize: 25,
        fontWeight: "bold",
    },
    emptyHeader: {
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",
        opacity: 0.2,
    },
    emptyHeaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1,
    },
    addBtn: {
        position: "absolute",
        right: 15,
        bottom: 50,
    }
})