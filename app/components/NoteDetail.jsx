/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useHeaderHeight } from "@react-navigation/elements"
import AsyncStorage from "@react-native-async-storage/async-storage"
/*========================================
        Import Components
========================================*/
import { RoundIconBtn } from "./RoundIconBtn"
import { useNotes } from "../contexts/NoteProvider"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"
import { NoteInputModal } from "./NoteInputModal"

export const NoteDetail = (props) => {

    /*==== Variables ====*/
    const { note } = props.route.params
    const headerHeight = useHeaderHeight()
    const { setNotes } = useNotes()
    /*==== useState ====*/
    const [showModal, setShowModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    /*==== useEffect ====*/

    /*==== Functions START ====*/
    const formatDate = ms => {
        const date = new Date(ms)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hrs = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`
    }

    const deleteNote = async () => {
        const result = await AsyncStorage.getItem("notes")
        let notes = []
        if (result !== null) notes = JSON.parse(result)
        const newNotes = notes.filter(n => n.id !== note.id)
        setNotes(newNotes)
        await AsyncStorage.setItem("notes", JSON.stringify(newNotes))
        props.navigation.goBack()
    }

    const displayDeleteAlert = () => {
        Alert.alert(`Are You Sure!`, `This action will delete your not permanently!`, [
            {
                text: "Delete",
                onPress: deleteNote,
            },
            {
                text: "No Thanks",
                onPress: () => { console.log("not thanks"); }
            },
        ], {
            cancelable: true,
        })
    }

    const handleUpdate = () => {}

    const handleOnClose = () => setShowModal(false)

    const openEditModal = () => {
        setIsEdit(true)
        setShowModal(true)
    }
    
    /*==== Functions END ====*/

    // Return for component starts here.
    return (
        <>
            <ScrollView contentContainerStyle={[styles.container, { paddingTop: headerHeight }]}>
                <Text style={styles.time} >{`Created at ${formatDate(note.time)}`}</Text>
                <Text style={styles.title} >{note.title}</Text>
                <Text style={styles.desc} >{note.desc}</Text>
            </ScrollView>
            <View style={styles.btnContainer}>
                <RoundIconBtn antIconName="delete" style={{
                    backgroundColor: colors.ERROR,
                    marginBottom: 15,
                }}
                    onPress={displayDeleteAlert}
                />
                <RoundIconBtn
                    antIconName="edit"
                    onPress={openEditModal}
                />
            </View>
            <NoteInputModal
                isEdit={isEdit}
                note={note}
                onClose={handleOnClose}
                onSubmit={handleUpdate}
                visible={showModal}
            />
        </>
    )
}

/*========================================
        StyleSheet
========================================*/
const styles = StyleSheet.create({
    container: {
        // flex: 1,
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