import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    
    firstContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      backgroundColor: colors.verdePrincipal,
      height: "20%",
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 10,
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
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
      paddingHorizontal: 40,
      paddingTop: 66,
    },
  });
  