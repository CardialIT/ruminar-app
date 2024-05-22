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
        height: height * 0.16,
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: height * 0.02,
    },

    title: {
        fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 24,
        color: colors.background,
    },

    containerItem: {
        justifyContent: "center",
        alignSelf: "center",
        width: "90%",
        padding: width * 0.02,
    },

    secondContainer: {
        padding: width * 0.04
    },

    listagemTitle: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: height * 0.02,
    },

})