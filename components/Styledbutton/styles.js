import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
      width:'100%',
      paddingLeft:40,
      paddingRight:40,
      marginBottom:20,
      // height:"25%",
    },
   button:{
    height: 50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  
   }, 
   text:{
    fontSize:12,
    fontWeight:'500',
    textTransform:'uppercase', 
    letterSpacing:1,
   }
});


export default styles;