import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      marginHorizontal: 20,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 16,
    },
    modalButtons: {
    
     display: "flex",
     flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },

    buttonModal:{
  backgroundColor:  colors.verdePrincipal,
  height: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
  paddingLeft: 10,
paddingRight: 10,
    },

    buttonModalDecline:{
      backgroundColor:  'red',
      height: 30,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      paddingLeft: 10,
    paddingRight: 10,
        },

    buttonModalText:{
color: "white", 
fontWeight: "bold",
    },
  
    firstContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.verdePrincipal,
      height: "20%",
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 10,
    },
    textheader:{
      fontWeight: "bold",
      fontSize: 22,
      color: 'white',
    },
  
    scrollViewContainer: {
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    
    secondContainer: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      paddingHorizontal: 30,
      paddingTop: 10,
      marginBottom: 10,
    },
  
    title: {
      fontWeight: "bold",
      fontSize: 24,
      color: colors.text,
    },
  
    subtitle: {
      fontWeight: "400",
      fontSize: 14,
      color: colors.cinza,
    },
  
    images: {  
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 26,
      paddingBottom: 10,
      width: '100%',
    },
  
    imageContainer: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginBottom: 20,
    },
  
    imageTitle: {
      fontWeight: "bold",
      fontSize: 24,
      color: colors.background,
    },
  
    imageSubtitle: {
      fontWeight: "400",
      fontSize: 12,
      color: colors.background,
    },
  
    overlay: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'start',
      width: '100%',
      height: '100%',
     
    },
  });
  