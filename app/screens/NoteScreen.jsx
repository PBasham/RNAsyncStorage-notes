/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SearchBar } from "../components/SearchBar"
import colors from "../misc/colors"
/*========================================
        Import Components
========================================*/

export const NoteScreen = ({user}) => {

    const [greet, setGreet] = useState(greet)

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

    useEffect(() => {
        findGreet()
    },[])

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT}/>
            <View>
                <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
                <SearchBar containerStyle={{marginVertical: 15}}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        fontWeight: "bold",
    }
})