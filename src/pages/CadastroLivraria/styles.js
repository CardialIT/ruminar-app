import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
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

    createButton: {
        backgroundColor: "#FEAB13",
        paddingVertical: height * 0.08, 
        paddingHorizontal: width * 0.2, 
        borderRadius: 4,
        height: "auto",
        alignContent: "flex-start"
    },

    textButton: {
        color: "#fff",
        
    }
 })