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
        paddingHorizontal: width * 0.1,
        paddingVertial: width * 0.2,
        alignContent: "center",
    },

    containerProps: {
        paddingHorizontal: width * 0.3,
        alignItems: "center",
        justifyContent: "space-between",
    },

    containerPropsItens: {
        marginHorizontal: width * 0.02,
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
        paddingVertical: height * 0.004,
    },

    itensPercentageC: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.004,
        width: width * 0.94
    },

    itens: {
        width: "60%",
        height: height * 0.04,
        color: colors.text,
        fontSize: 14,
    },

    percetange: {
        alignContent: "flex-end",
        color: colors.verdePrincipal
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
