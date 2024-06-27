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
    justifyContent: "space-between",
    backgroundColor: colors.verdePrincipal,
    height: "15%",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.background,
  },
  backButton: {
    padding: 10,
  },
  secondContainer: {
    flex: 1,
    padding: 20,
  },
  detailContainer: {
    backgroundColor: colors.lightGray,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  detailText: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
});
