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
    justifyContent: "space-between",
    backgroundColor: colors.verdePrincipal,
    height: height * 0.16,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  title: {
    fontFamily: "Alata-Regular",
    fontWeight: "bold",
    fontSize: 24,
    color: colors.background,
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
    padding: width * 0.06,
    alignItems: "center",
  },

  containerProps: {
    paddingHorizontal: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerPropsItens: {
    marginHorizontal: width * 0.02,
    borderColor: colors.cinza,
    borderWidth: 0.5,
    borderRadius: 2,
  },

  containerPropsTitle: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: width * 0.08,
    marginRight: width * 0.08,
    width: width * 1,
    height: height * 0.04,
    marginBottom: height * 0.02,
  },

  itemTitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    marginLeft: 10,
  },

  itensPercentage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.cinzaBackground,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.004,
  },

  itensPercentageC: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.004,
  },

  itens: {
    width: width * 0.8,
    height: height * 0.04,
    color: colors.text,
    fontSize: 14,
  },

  percetange: {
    color: colors.verdePrincipal,
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
});
