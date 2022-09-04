import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const NoteDetail = (props) => {
    const { note } = props.route.params

  return (
    <View>
      <Text>{ note.title }</Text>
      <Text>{ note.desc }</Text>
    </View>
  )
}

const styles = StyleSheet.create({})