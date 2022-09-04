/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from "@expo/vector-icons" // Import Ant Icons fomr vector-icons
/*========================================
        Import Colors
========================================*/
import colors from "../misc/colors"


export const RoundIconBtn = ({antIconName, size, color}) => {
  return <AntDesign name={antIconName} size={size || 24} color={color || colors.LIGHT} />
}

const styles = StyleSheet.create({

})