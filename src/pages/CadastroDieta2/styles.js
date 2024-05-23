import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";
import { ScrollView } from "react-native-gesture-handler";

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
        height: "16%",
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 10,
    },

    title: {
        fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 24,
        color: colors.background,
    },

    containerItem: {
        justifyContent: "space-between",
        padding: width * 0.02,
        marginHorizontal: width * 0.012
    },

    // SECOND CONTAINER 

    secondContainer: {
        flex: 1,
        paddingVertical: width * 0.02,
    },

    listagemTitle: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.05
    },

     // ScrollView

     containerList: {
        flex: 1,
        backgroundColor: colors.background,
        height: "100%"
    },

    containerResult: {
        marginTop: height * 0.02,
        backgroundColor: colors.backgroundInput,
        width: "100%",
    },

    containerResultItem: {
        justifyContent: "center",
        alignSelf: "center",
        width: "90%",
        borderWidth: 0.2,
        borderRadius: 5,
    },

    containerTitle: {
        fontWeight: "bold",
        fontSize: height * 0.02,
        marginBottom: height * 0.006,
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.02
    },

    separator: {
        borderBottomWidth: 0.2,
        borderColor: colors.cinza,
        width: '100%',
    },
    

    // INPUT FIELD

    inputFieldText: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 16,
        alignSelf: "flex-start",
        marginLeft: width * 0.05,
        marginTop: height * 0.02
    },

    inputField: {
        flexDirection: "column",
        width: "90%",
        backgroundColor: "#E8ECF4",
        borderRadius: width * 0.02,
        height: 40,
        alignItems: "center",
        marginTop: height * 0.02,
        marginHorizontal: width * 0.05,
        borderColor: colors.cinza,
        borderWidth: 0.6
    },

    input: {
        width: "85%",
        height: 40,
        padding: 8,
        fontSize: 14,
    },

    // ADICIONAR LIVRARIA BUTTON

    containerAddItem: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03
    },

    addButton: {
        flexDirection: "row",
        backgroundColor: colors.background,
        width: width * 0.86,
        height: height * 0.06,
        borderRadius: width * 0.02,

        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

        borderColor: colors.verdePrincipal,
        borderWidth: 1
    },

    viewTextButton: {
        backgroundColor: colors.verdePrincipal
    },

    createButtonText: {
        color: colors.verdePrincipal,
        padding: width * 0.02,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        marginRight: 5,
    },

    // BOTÃO "PRÓXIMO"
    containerButton: {
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
    },

    createButton: {
        backgroundColor: colors.verdePrincipal,
        width: width * 0.86,
        height: height * 0.06,
        borderRadius: width * 0.02,
        padding: width * 0.02,
        justifyContent: "center",
        alignSelf: "center",
    },

    textButton: {
        color: colors.background,
        fontWeight: "bold",
        alignSelf: "center",
    },

})