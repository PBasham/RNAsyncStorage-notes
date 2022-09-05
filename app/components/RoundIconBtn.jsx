/*========================================
        Import Dependencies
========================================*/
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from "@expo/vector-icons" // Import Ant Icons fomr vector-icons
/*========================================
        Import Colors
========================================*/
import colors from "../misc/colors"


export const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
    return (<Pressable
        style={[styles.icon, { ...style }]}
        onPress={onPress}
    >
        <AntDesign
            name={antIconName}
            size={size || 24}
            color={color || colors.LIGHT}
        />
    </Pressable>)
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.PRIMARY,
        padding: 15,
        borderRadius: 50,
        elevation: 5,
    }
})