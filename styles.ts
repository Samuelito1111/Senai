import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    central:{
      flex:1,
      backgroundColor:'gray',
      alignItems:'center',
      justifyContent:'center',
    },
  
    titulo:{
      fontSize:25,
      margin: '1%',
      color:'white',
    },

    //componentes
    caixa:{
        backgroundColor:'white',
        width:'70%',
        padding:10,
        borderRadius:10,
        marginTop:20,
    },

    ctitle:{
        fontSize:20,
        color:'#2196F3',
        fontWeight:'bold',
    },

    cinput:{
        width:'100%',
        borderWidth:1,
        borderColor:'#2196F3',
        borderRadius:5,
        padding:10,
        marginBottom:15,
        marginTop:5,
    }
  })