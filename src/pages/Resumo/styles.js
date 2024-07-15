import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
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

    containerItem: {
        width: 28,
        height: 28,
    },

    backButton: {
        position: "absolute",
        left: 20,
        paddingTop: 40,
        paddingBottom: 10
    },

    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: colors.background,
    },

    // SECOND CONTAINER
    secondContainer: {
        flex: 1,        
        padding: width * 0.06,
        alignItems: "center",
    
        paddingBottom: 80,        
    },


    addButton: {
        flexDirection: "row",
        backgroundColor: colors.amarelo,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: width * 0.02,
        height: height * 0.06,
        marginTop: height * 0.04,
        marginBottom: height * 0.04,
        width: width * 0.9,
        paddingHorizontal: width * 0.04,
    },

    addButtonText: {
        color: colors.background,
        justifyContent: "space-between",
        fontWeight: "bold"
    },

    listItemContainer: {
        backgroundColor: colors.verdePrincipal,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: width * 0.02,
        height: height * 0.06,
        marginBottom: height * 0.02,
        width: width * 0.9,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.04,
    },

    listTextItem: {
        color: colors.background
    },


    containerList: {
        flex: 1,
        backgroundColor: colors.background,

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


    // modal
    modalContainer: {
        flex: 1,
        backgroundColor: colors.backgroundModal,
        justifyContent: "center",
        alignItems: "center"
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
        marginBottom: 10
    },

    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },

    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    modalButton: {
        fontSize: 16,
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
        alignItems: "center"
    },

    excluirButton: {
        backgroundColor: colors.vermelho,
        borderWidth: 1,
        padding: 8,
        borderColor: colors.vermelho,
        borderRadius: 8,
        width: width * 0.3,
        justifyContent: "center",
        alignItems: "center"
    },

    modalButtonDelete: {
        color: colors.background,
    },

    containerAddItem: {
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: colors.verdePrincipal
    },

    createButton: {
        flexDirection: "row",
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: width * 0.01,
        height: height * 0.06,
        marginTop: height * 0.04,
        marginBottom: height * 0.04,
        width: width * 0.9,
        paddingHorizontal: width * 0.2,
        borderColor: colors.verdePrincipal,
        borderWidth: 1
    },

    createButtonText: {
        color: colors.verdePrincipal,
        fontWeight: "bold"
    },


    // BOTÃO PRÓXIMO
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


});