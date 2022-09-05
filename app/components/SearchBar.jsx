/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from "@expo/vector-icons" // Import Ant Icons fomr vector-icons
/*========================================
        Import Components
========================================*/

/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

export const SearchBar = ({ containerStyle, value, onChangeText, onClear }) => {
    return (
        <View style={[styles.container, { ...containerStyle }]}>
            <TextInput value={value} onChangeText={onChangeText} style={styles.searchBar} placeholder="Search here..." />
            {value ? <AntDesign
                name="close"
                size={20}
                color={colors.PRIMARY}
                onPress={onClear}
                style={styles.clearIcon}
            /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    searchBar: {
        paddingLeft: 15,
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height: 40,
        borderRadius: 40,
        fontSize: 20,
        zIndex: 1,
    },
    clearIcon: {
        position: "absolute",
        right: 10,
        zIndex: 1,
    }
})