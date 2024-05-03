import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D2D2D2",
    },

    firstContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#307C31",
        height: "16%",
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 10
    },

    containerItem: {
        width: 28,
        height: 28
    },

    secondContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },

    title: {
        fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 24,
        color: "#FFF",
    },

    addButton: {
        flexDirection: "row",
        backgroundColor: "#FEAB13",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: 'center',
        borderRadius: width * 0.02,
        height: height * 0.06,
        marginTop: height * 0.04,
        marginBottom: height * 0.04,
        width: width * 0.9,
        paddingHorizontal: width * 0.04,

    },

    addButtonText: {
        color: "#fff",
        justifyContent: "space-between"
    },

    listItemContainer: {
        alignSelf: "center",
        backgroundColor: "#307C31",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: width * 0.02,
        height: height * 0.06,
        marginBottom: height * 0.02,
        width: width * 0.9,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.04,
    },

    listItemText: {
        color: "#fff"
    },

    listTextItem: {
        color: "#fff"
    },

    containerImages: {
        display: "flex",
        flexDirection: "row",
        width: "auto"
    },

    containerItem: {
        justifyContent: "space-between",
        padding: width * 0.02,
        marginHorizontal: width * 0.012
    },


});