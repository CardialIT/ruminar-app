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

  scrollView: {
    flexGrow: 1,
  },

  containerViewItem: {
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
    padding: width * 0.02,
  },

  containerList: {
    marginTop: height * 0.04,
    backgroundColor: colors.background,
  },


  containerTitle: {
    fontWeight: "bold",
    fontSize: height * 0.02,
    marginBottom: height * 0.006,
  },

  textResult: {
    fontSize: height * 0.02,
    marginBottom: height * 0.006,
    backgroundColor: "#000",
  },

  containerInput: {
    borderWidth: 0.2,
    height: "auto",
    padding: width * 0.02,
    marginBottom: height * 0.02,
    borderRadius: 4,
    backgroundColor: colors.backgroundInput,
  },

  containerResult: {
    borderWidth: 0.2,
    height: "auto",
    padding: width * 0.02,
    marginTop: height * 0.02,
    borderRadius: 5,
    backgroundColor: colors.backgroundInput,
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
  },

  // NOTIFICATION

  containerItemNotification: {
    flexDirection: "row",
    borderWidth: 0.2,
    borderRadius: 4,
    backgroundColor: colors.amareloBackground,
    padding: 6,
    alignItems: "center",
    marginBottom: height * 0.02
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
    marginLeft: width * 0.02,
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

});
