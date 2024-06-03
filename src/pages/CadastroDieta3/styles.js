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

    containerItem: {
        justifyContent: "space-between",
        padding: width * 0.02,
        marginHorizontal: width * 0.012
    },

    // SECOND CONTAINER 

    secondContainer: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: "90%",
    },

    listagemTitle: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: height * 0.04,
    },

    // SCROLL VIEW

    containerList: {
        flex: 1,
        backgroundColor: colors.background,
        height: "100%"
    },


    // INPUT FIELD

    containerItemTitle: {
        flex: 1,
        paddingHorizontal: width * 0.01,
        paddingVertical: height * 0.02,
    },

    listagemItemTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: height * 0.02,
    },

    inputField: {
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
        height: 40,
        paddingHorizontal: width * 0.02,
        borderRadius: width * 0.02,
        borderColor: colors.cinza,
        borderWidth: 0.6,
        backgroundColor: colors.cinzaBackground
    },

    input: {
        width: "85%",
        height: 40,
        padding: 8,
        fontSize: 14,

    },

    // NOTIFICATION

    containerItemNotification: {
        flexDirection: "row",
        borderWidth: 0.2,
        borderRadius: 4,
        backgroundColor: colors.amareloBackground,
        padding: 6,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: width * 0.01,
        marginVertical: width * 0.02

    },

    containerImageNotification: {
        justifyContent: "center",
        width: "10%"
    },

    notificationIcon: {
        width: width * 0.06,
        height: height * 0.03,
        marginRight: width * 0.02,
    },

    containerTextNotification: {
        flex: 1,
    },

    notificationText: {
        flexWrap: "wrap",
        width: "100%"
    },

    underlinedText: {
        textDecorationLine: 'underline',
        fontWeight: "bold"
    },

    // MODAL

    modalContainer: {
        flex: 1,
        backgroundColor: colors.backgroundModal,
        justifyContent: "center",
        alignItems: "center",
    },

    modalContent: {
        backgroundColor: colors.background,
        width: width * 0.8,
        padding: 20,
        borderWidth: 0.2,
        borderRadius: 10,
    },

    modalTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },

    modalItemContainer: {
        flexDirection: "row",
    },

    
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        fontSize: 14,
        flex: 1,
        flexWrap: "wrap"
    },

    modalButtons: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    modalButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.verdePrincipal,
    },

    cancelButton: {
        color: colors.verdePrincipal,
        borderWidth: 1,
        padding: 8,
        borderColor: colors.verdePrincipal,
        borderRadius: 8,
        marginRight: 8,
        width: width * 0.3,
        justifyContent: "center",
        alignItems: "center",
    },

    excluirButton: {
        backgroundColor: colors.vermelho,
        borderWidth: 1,
        padding: 8,
        borderColor: colors.vermelho,
        borderRadius: 8,
        width: width * 0.3,
        justifyContent: "center",
        alignItems: "center",
    },

    modalButtonDelete: {
        color: colors.background,
    },


    // BOTÃO "VER RESUMO"

    containerButton: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
        marginHorizontal: width * 0.05,
    },

    createButton: {
        backgroundColor: colors.verdePrincipal,
        flexDirection: "row",
        width: "100%",
        height: height * 0.06,
        borderRadius: width * 0.02,

        justifyContent: "center",
        alignItems: "center",

        borderColor: colors.verdePrincipal,
        borderWidth: 1
    },

    textButton: {
        color: colors.background,
        fontWeight: "bold",
        alignSelf: "center",
    },


})