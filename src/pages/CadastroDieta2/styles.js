import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    keyboardAvoidingContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    // FIRST CONTAINER 
    firstContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.verdePrincipal,
        height: Platform.OS === 'ios' ? '18%' : '20%',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        paddingBottom: 10
    },

    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: colors.background,
    },

    containerItem: {
        justifyContent: "space-between",
        padding: width * 0.02,
        marginHorizontal: width * 0.012
    },

    // ScrollView Container
    scrollContainer: {
        flex: 1,
    },

    scrollContent: {
        flexGrow: 1,
        paddingBottom: Platform.OS === 'ios' ? 40 : 30,
    },

    // SECOND CONTAINER 
    secondContainer: {
        flex: 1,
        paddingVertical: width * 0.02,
    },

    containerDietaName: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: height * 0.02,
    },

    listagemTitle: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.05,
    },

    // Container List
    containerList: {
        flex: 1,
        backgroundColor: colors.background,
        minHeight: height * 0.5,
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
    containerItemTitle: {
        flex: 1,
        paddingHorizontal: width * 0.01,
        paddingTop: height * 0.02,
        marginHorizontal: width * 0.04,
        marginBottom: height * 0.01,
    },

    listagemItemTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: height * 0.015,
        textTransform: "uppercase"
    },

    inputContainer: {
        position: 'relative',
        width: '100%',
    },

    inputField: {
        width: '100%',
        height: 45,
        paddingHorizontal: width * 0.03,
        borderRadius: width * 0.02,
        borderColor: colors.cinza,
        borderWidth: 1,
        paddingRight: 45,
        backgroundColor: colors.background,
        fontSize: 16,
    },

    inputFieldName: {
        width: width * 0.9,
        height: 45,
        paddingHorizontal: width * 0.03,
        borderRadius: width * 0.02,
        borderColor: colors.cinza,
        borderWidth: 1,
        paddingRight: 40,
        backgroundColor: colors.background,
        fontSize: 16,
        marginTop: height * 0.01,
    },

    removeButton: {
        position: 'absolute',
        right: 12,
        top: '50%',
        transform: [{ translateY: -12 }],
        zIndex: 10,
    },

    // ADICIONAR LIVRARIA BUTTON
    containerAddItem: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
        marginBottom: height * 0.02,
        marginHorizontal: width * 0.05,
    },

    addButton: {
        flexDirection: "row",
        backgroundColor: colors.background,
        width: "100%",
        height: height * 0.06,
        borderRadius: width * 0.02,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.verdePrincipal,
        borderWidth: 1.5,
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
        fontSize: 16,
    },

    // BOTÃO "PRÓXIMO"
    containerButton: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.02,
        marginBottom: height * 0.05,
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
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },

    textButton: {
        color: colors.background,
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 16,
    },
});