/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import {
    Modal,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Keyboard,
} from 'react-native'
import { dismiss } from "react-native/Libraries/LogBox/Data/LogBoxData"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"
import { RoundIconBtn } from "./RoundIconBtn"

export const NoteInputModal = ({ visible, onClose, onSubmit, note, isEdit }) => {

    /*=== useState === */
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    /*==== useEffect ====*/
    useEffect(() => {
        if (isEdit) {
            setTitle(note.title)
            setDesc(note.desc)
        }
    }, [isEdit])



    /*==== Functions ====*/
    // Simply closes the keyboard
    const handleModalClose = () => {
        Keyboard.dismiss()
    }
    // updates the title / text on change.
    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === "title") setTitle(text)
        if (valueFor === "desc") setDesc(text)
    }

    const handleSubmit = () => {
        if (!title.trim() && !desc.trim()) return onClose()
        if(isEdit) {
            onSubmit(title, desc, Date.now())
        } else {
            onSubmit(title, desc)
            setTitle("")
            setDesc("")
        }
        onClose()
    }

    const closeModal = () => {
        if (isEdit) {

        } else {
            setTitle("")
            setDesc("")
        }
        onClose()
    }

    /* END Functions */

    return (
        <>
            <StatusBar hidden />
            <Modal visible={visible} animationType="fade">
                <View style={styles.container}>
                    <TextInput
                        value={title}
                        onChangeText={(text) => handleOnChangeText(text, "title")}
                        placeholder="Title"
                        style={[styles.input, styles.title]}
                    />
                    <TextInput
                        value={desc}
                        onChangeText={(text) => handleOnChangeText(text, "desc")}
                        multiline
                        placeholder="Note"
                        style={[styles.input, styles.desc]}
                    />
                    <View style={styles.btnContainer}>
                        <RoundIconBtn
                            antIconName="check"
                            size={15}
                            onPress={handleSubmit}
                        />
                        { title.trim() || desc.trim() ? <RoundIconBtn
                            antIconName="close"
                            size={15}
                            style={{ marginLeft: 15 }}
                            onPress={closeModal}
                        /> : null}
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={handleModalClose}>
                    <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: colors.PRIMARY,
        fontSize: 20,
        color: colors.DARK,
    },
    title: {
        height: 40,
        marginBottom: 15,
        fontWeight: "bold",
    },
    desc: {
        height: 100,
    },
    modalBG: {
        flex: 1,
        zIndex: -1,
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 15,
    }
})