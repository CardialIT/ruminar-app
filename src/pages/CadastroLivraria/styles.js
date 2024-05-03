import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },

    firstContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#307C31",
        height: "16%",
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: height * 0.02
    },

    title: {
        fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 24,
        color: "#FFF",
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
        marginBottom: height * 0.006
    },

    containerInput: {
        borderWidth: 0.2,
        height: "auto",
        padding: width * 0.02,
        borderRadius: 4,
        backgroundColor: "#F7F8F9"
    },

    containerButton: {
        marginTop: height * 0.02
    },

    createButton: {
        backgroundColor: "#307C31",
        width: width * 0.86,
        height: height * 0.06,
        borderRadius: width * 0.02,
        padding: width * 0.02,
        justifyContent: "center",
        alignSelf: "center",
    },

    textButton: {
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"

    }
})