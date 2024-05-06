import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    scrollView: {
        flex: 1
    },

    secondContainer: {
        paddingTop: height * 0.04,
        paddingHorizontal: width * 0.06,
    },

    // FIRST CONTAINER

    firstContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.verdePrincipal,
        height: "16%",
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10
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

    ////////////

    containerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: height * 0.01
    },

    containerItems1: {
        borderTopWidth: 0.2,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        paddingLeft: width * 0.02,
        paddingVertical: width * 0.02,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerItemsC: {
        backgroundColor: colors.backgroundInput,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        paddingLeft: width * 0.02,
        paddingVertical: width * 0.02,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerItems: {
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        paddingLeft: width * 0.02,
        paddingVertical: width * 0.02,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerItems2: {
        borderBottomWidth: 0.2,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        paddingLeft: width * 0.02,
        paddingVertical: width * 0.02,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    percentage: {
        color: colors.verdePrincipal,
        marginRight: width * 0.02
    },

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
        
    }

})