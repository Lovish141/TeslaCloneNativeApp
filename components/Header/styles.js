import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
     position:'absolute',
     top:50,
     zIndex:100,
     flexDirection:'row',
     justifyContent:'space-between',
     width:'100%',
     paddingHorizontal:40,
    },
    logo:{
      width:100,
      height:20,
      resizeMode:'contain'
    },
    ham:{
        height:25,
        width:25

    }
})

export default styles;