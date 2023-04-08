import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const index = (props) => {
    const type=props.type;

    const backgroundcolor1= type=='primary'?'#171A20CC':'#FFFFFFA6';
    const textColor=type=='primary'?'#ffffff':'#171A20';
  return (
    <View style={styles.container}>
        <Pressable style={[styles.button,{backgroundColor:backgroundcolor1 }]} onPress={()=>{
            console.warn(type);
        }}>
             <Text style={[styles.text,{color:textColor}]}>{props.text}</Text>

        </Pressable>
     
    </View>
  )
}

export default index