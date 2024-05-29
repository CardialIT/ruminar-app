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
        height: "20%",
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10
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
        padding: width * 0.06,
        alignItems: "center",
    },

    listagemTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: height * 0.02,
        
    },

    listagemText: {
        color: colors.background,
        justifyContent: "center",
        alignContent: "center",
        padding: width * 0.02
    },

    // ITEMS

    listItemContainer: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: width * 0.03,
        height: height * 0.06,
        width: width * 0.86,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.04,
        backgroundColor: colors.verdePrincipal,
    },


    listTextItem: {
        color: colors.background,
        textTransform: "uppercase",
    },

})