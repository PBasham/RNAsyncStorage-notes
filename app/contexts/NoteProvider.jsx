/*========================================
        Import Dependencies
========================================*/
import { createContext, useState, useEffect, useContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"


const NoteContext = createContext()

export const NoteProvider = ({children}) => {
    /*==== useState ====*/
    const [notes, setNotes] = useState([])

    /*==== Functions START ====*/
    const findNotes = async () => {
        const result = await AsyncStorage.getItem("notes")
        if (result !== null) setNotes(JSON.parse(result))
    }
    /*==== Functions END ====*/

    /*==== Variables ====*/
    
    
    /*==== useEffect ====*/
    useEffect(() => {
        findNotes()
    }, [])

  return (
    <NoteContext.Provider value={{notes, setNotes, findNotes}}>
        {children}
    </NoteContext.Provider>
  )
}

export const useNotes = () => useContext(NoteContext)

// export default NoteProvider