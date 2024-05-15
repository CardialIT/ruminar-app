import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  firstContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.verdePrincipal,
    height: height * 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: height * 0.01,
  },

  title: {
    fontFamily: "Alata-Regular",
    fontWeight: "bold",
    fontSize: 24,
    color: colors.background,
  },

  containerList: {
    backgroundColor: colors.background,
  },

  containerItem: {
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
    padding: width * 0.02,
  },

  containerTitle: {
    fontWeight: "bold",
    fontSize: height * 0.02,
    marginBottom: height * 0.006,
  },

  textResult: {
    fontSize: height * 0.02,
    marginBottom: height * 0.006,
    backgroundColor: "#000",
  },

  containerInput: {
    borderWidth: 0.2,
    height: "auto",
    padding: width * 0.02,
    borderRadius: 4,
    backgroundColor: colors.backgroundInput,
  },

  containerResult: {
    borderWidth: 0.2,
    height: "auto",
    padding: width * 0.02,
    marginTop: height * 0.02,
    borderRadius: 5,
    backgroundColor: colors.backgroundInput,
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
  },

  containerButton: {
    marginTop: height * 0.02,
  },

  createButton: {
    backgroundColor: colors.verdePrincipal,
    width: width * 0.86,
    height: height * 0.06,
    borderRadius: width * 0.02,
    padding: width * 0.02,
    justifyContent: "center",
    alignSelf: "center",
  },

  textButton: {
    color: colors.background,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
