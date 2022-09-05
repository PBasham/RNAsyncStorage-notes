/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { FlatList, Keyboard, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Note } from "../components/Note"
/*========================================
Import Components
========================================*/
import { NoteInputModal } from "../components/NoteInputModal"
import { RoundIconBtn } from "../components/RoundIconBtn"
import { SearchBar } from "../components/SearchBar"
import { useNotes } from "../contexts/NoteProvider"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

export const NoteScreen = ({ user, navigation }) => {

    /*==== Variables ====*/
    const {notes, setNotes} = useNotes()
    /*==== useState ====*/
    const [greet, setGreet] = useState(greet)

    const [modalVisable, setModalVisable] = useState(false)
    
    /*==== useEffect ====*/
    useEffect(() => {
        findGreet()
    }, [])
    
    /*==== Functions START ====*/

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

    const handleOnSubmit = async (title, desc) => {
        const note = { id: Date.now(), title, desc, time: Date.now(), }
        const updatedNotes = [...notes, note]
        setNotes(updatedNotes)
        await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes))
    }

    

    const openNote = (note) => {
        navigation.navigate("NoteDetail", { note })
    }
    /*==== Functions END ====*/


    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
                    {notes.length ?
                        <SearchBar containerStyle={{ marginVertical: 15 }} />
                        : null}
                    {/* Display Note list using FlatList */}
                    <FlatList
                        data={notes}
                        numColumns={2}
                        columnWrapperStyle={{
                            justifyContent: "space-between",
                            marginBottom: 15,
                        }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Note
                            onPress={() => openNote(item)}
                            item={item}
                        />
                        }
                    />
                    {!notes.length ?
                        <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
                            <Text style={styles.emptyHeader}>Add Notes</Text>
                        </View>
                        : null}
                </View>
            </TouchableWithoutFeedback>
            <RoundIconBtn
                onPress={() => setModalVisable(true)}
                antIconName="plus"
                style={styles.addBtn}

            />
            <NoteInputModal
                visible={modalVisable}
                onClose={() => setModalVisable(false)}
                onSubmit={handleOnSubmit}
            />
        </>
    )
}


/*========================================
        StyleSheet
========================================*/
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
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
        zIndex: 1,
    }
})