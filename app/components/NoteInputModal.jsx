/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
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

export const NoteInputModal = ({ visible }) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")





    /* Functions */
    const handleModalClose = () => {
        Keyboard.dismiss()
    }

    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === "title") setTitle(text)
        if (valueFor === "desc") setDesc(text)
    }
    /* END Functions */

    console.log(title, desc);

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
    }
})