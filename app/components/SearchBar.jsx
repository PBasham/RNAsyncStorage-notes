/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from "../misc/colors"
/*========================================
        Import Components
========================================*/

export const SearchBar = ({containerStyle}) => {
  return (
    <View style={[styles.container, {...containerStyle}]}>
        <TextInput style={styles.searchBar} placeholder="Search here..." />
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {

        paddingLeft: 15,
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height: 40,
        borderRadius: 40,
        fontSize: 20,
    },
    container: {
        paddingHorizontal: 20,
    },
})