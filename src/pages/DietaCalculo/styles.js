import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  firstContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.verdePrincipal,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: height * 0.02,
  },

  headerContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: height * 0.02,
  },

  title: {

    fontWeight: "bold",
    fontSize: 24,
    color: colors.background,
  },

  titleHead: {

    fontWeight: "bold",
    fontSize: 25,
    color: "#000000",
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

  containerInput: {
    borderWidth: 0.2,
    height: "auto",
    padding: width * 0.02,
    borderRadius: 4,
    backgroundColor: colors.backgroundInput,
  },

  containerInputIMSFDN: {
    fontWeight: "900",
    borderWidth: 0.2,
    height: "auto",
    padding: width * 0.02,
    borderRadius: 4,
    color: "#000",
    backgroundColor: colors.backgroundInput,
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
