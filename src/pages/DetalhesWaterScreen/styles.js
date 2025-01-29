import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // FIRST CONTAINER

  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.verdePrincipal,
    height: "20%",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.background,
  },

  backButton: {
    position: "absolute",
    left: 20,
    paddingTop: 40,
    paddingBottom: 10
  },

  containerImage: {
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
    padding: width * 0.03,
  },

  // SECOND CONTAINER

  secondContainer: {
    flex: 1,
    marginTop: height * 0.02,
    alignContent: "center",
    width: "100%",

  },

  containerProps: {

    alignItems: "center",
    justifyContent: "space-between", 
   
  },

  containerPropsItens: {
    width: '100%',
    borderColor: colors.cinza,
    borderWidth: 0.5,
    borderRadius: 2,
 
  },

  itemTitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: width * 0.02,
    marginRight: width * 0.08,
    width: "auto",
    height: height * 0.04,
    marginBottom: height * 0.02,
  },

  itensPercentage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.cinzaBackground,
    paddingHorizontal: width * 0.02,
    height: "auto",

  },

  itensPercentageC: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.02,
    height: "auto",
    width: width * 0.94
  },

  itens: {
    width: "60%",
    height: height * 0.04,
    color: colors.text,
    fontSize: 14,
  },

  itensN: {
    width: "60%",
    height: height * 0.04,
    color: colors.text,
    fontSize: 14,
    fontWeight: "bold",
  },

  itensR: {
    width: "60%",
    height: height * 0.04,
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
  },

  percetange: {
    alignContent: "flex-end",
    color: colors.verdePrincipal
  },

  percetangeN: {
    alignContent: "flex-end",
    color: colors.verdePrincipal,
    fontWeight: "bold",
  },

  percetangeR: {
    alignContent: "flex-end",
    color: colors.verdePrincipal,
    fontWeight: "bold",
    color: "red"
  },

  /// ÚLTIMO CONTAINER

  containerInfo: {
    flexDirection: "row",
    paddingVertical: width * 0.04,
    justifyContent: "center",
  },

  image: {
    marginRight: width * 0.02,
  },

  infoText: {
    color: colors.cinza,
  },

  // BOTÃO PRÓXIMO
  containerButton: {
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
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
