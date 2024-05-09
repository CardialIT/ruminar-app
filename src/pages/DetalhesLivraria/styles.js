import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.amarelo
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
        color: colors.background
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
        marginTop: 16,
        padding: width * 0.2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink"
    },

    containerProps: {
        // backgroundColor: "green",
        // flexDirection: "column",
        // paddingHorizontal: width * 0.04,
        backgroundColor: 'yellow',
        padding: width * 0.4,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'black',
    },

    itemTitle: {
        backgroundColor: "blue",
        width: width * 0.8,
        height: height * 0.08,
        color: "blue",
        fontWeight: "bold",
        fontSize: 16
    },

    itens: {
        backgroundColor: "pink",
        width: width * 0.4,
        height: height * 0.08,
        color: "white",
        fontSize: 12
    },

    /// ÚLTIMO CONTAINER

    containerInfo: {
        flexDirection: "row",
        paddingTop: width * 0.04,
        justifyContent: "center"
    },

    image: {
        marginRight: width * 0.02
    },

    infoText: {
        color: colors.cinza,

    },

});