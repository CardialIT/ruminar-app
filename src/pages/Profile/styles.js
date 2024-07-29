import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
   alignItems: "center",
height: '100%'
  },

  inside: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
   alignItems: "center",
  },

  column: {
    fontSize: 20,
    color: "#1E232C",
    fontWeight: "bold",
  },

  value: {
    fontSize: 20,
    color: "#1E232C",
    marginLeft: 10,

  },


  
 
});
