import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
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
        height: "20%",
        paddingHorizontal: 20,
        paddingTop: 40,
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

    // SECOND CONTAINER 

    secondContainer: {
    
        paddingVertical: width * 0.02,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    containerDietaName:{
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: 70,
       
    },

    listagemTitle: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: height * 0.04,
        paddingHorizontal: width * 0.05,
  

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

    containerItemTitle: {
        flex: 1,
        paddingHorizontal: width * 0.01,
        paddingTop: height * 0.02,
        marginHorizontal: width * 0.04,
    },

    listagemItemTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: height * 0.02,
        textTransform: "uppercase"
    },

    inputContainer: {
        position: 'relative',
        width: '100%',
    },

    inputField: {
        width: '100%',
        height: 40,
        paddingHorizontal: width * 0.02,
        borderRadius: width * 0.02,
        borderColor: colors.cinza,
        borderWidth: 0.6,
        paddingRight: 40,
        marginBottom: 10,
    },

    inputFieldName: {
        width: 330,
        height: 40,
        paddingHorizontal: width * 0.02,
        borderRadius: width * 0.02,
        borderColor: colors.cinza,
        borderWidth: 0.6,
        paddingRight: 40,
    },

    removeButton: {
        position: 'absolute',
        right: 10,
        height: 20,
    },

    // ADICIONAR LIVRARIA BUTTON

    containerAddItem: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
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
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
        marginHorizontal: width * 0.05,
    },
    textName:{
        fontWeight: "bold",
        fontSize: 16,
        color: 'black',
        textAlign: "left",
    },
    createButton: {
        marginTop: 20,
        backgroundColor: colors.verdePrincipal,
        flexDirection: "row",
        width: "80%",
        height: height * 0.06,
        borderRadius: width * 0.02,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.verdePrincipal,
        borderWidth: 1,
       
       
    },

    textButton: {
        color: colors.background,
        fontWeight: "bold",
        alignSelf: "center",
    },

})