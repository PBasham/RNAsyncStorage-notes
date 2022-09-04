/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, View } from 'react-native'
/*========================================
        Import Styles
========================================*/


export const Note = ({item}) => {
    
    const {title, desc} = item

  return (
    <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {},
})