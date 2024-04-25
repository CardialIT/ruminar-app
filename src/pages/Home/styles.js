import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D2D2D2"
    },

    firstContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#307C31",
        height: "16%",
        paddingHorizontal: 20,
        paddingTop: 26,
        paddingBottom: 10
    },

    containerItem: {
        width: 28,
        height: 28
    },

    secondContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 30,
        paddingTop: 40,
        marginBottom: 10,
    },

    title: {
        fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 24,
        color: "#1E232C",
    },

    subtitle: {
        fontFamily: "Alata-Regular",
        fontWeight: "400",
        fontSize: 14,
        color: "#8391A1"
    },

    images: {  
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 26,
        paddingBottom: 10,
        width: '100%'
        
    },

    imageContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 20
    },

    image: {
        width: "100%",
    },

    imageTitle: {
        fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 24,
        color: "#FFFFFF",
    },

    imageSubtitle: {
        fontFamily: "Alata-Regular",
        fontWeight: "400",
        fontSize: 12,
        color: "#FAFAFA",
    },

    overlay: {
        position: 'absolute',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingHorizontal: 40,
        paddingTop: 66
    },

  });