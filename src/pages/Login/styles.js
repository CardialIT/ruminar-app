import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    marginBottom: height * 0.25,
  },

  welcomeText: {
    fontSize: width * 0.07,
    marginBottom: height * 0.02,
    color: "#1E232C",
    fontWeight: "bold",
  },

  inputField: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#E8ECF4",
    borderRadius: width * 0.02,
    height: 70,
    alignItems: "center",
    marginBottom: height * 0.02,
  },

  input: {
    width: "85%",
    height: 50,
    padding: 8,
    fontSize: 16,
  },

  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  returnIcon: {
    width: width * 0.06,
    height: width * 0.06,
    marginBottom: height * 0.02,
  },

  loginButton: {
    height: height * 0.08,
    backgroundColor: "#307C31",
    justifyContent: "center",
    borderRadius: width * 0.02,
    marginBottom: height * 0.01,
  },

  buttonText: {
    color: "white",
    fontSize: width * 0.04,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  buttonReturn: {
    color: "black",
    fontSize: width * 0.04,
    textAlign: "left",
    padding: width * 0.05,
    alignSelf: "flex-start",
    marginBottom: height * 0.04,
    borderWidth: width * 0.0004,
    borderColor: "black",
    borderRadius: width * 0.02,
  },

  forgotPassword: {
    color: "#6A707C",
    marginTop: height * 0.001,
    fontSize: width * 0.04,
    marginBottom: height * 0.025,
    alignSelf: "flex-end",
  },
  register: {
    position: "relative",
    flexDirection: "row",
    bottom: -height * 0.31,
    fontSize: width * 0.04,
    alignSelf: "center",
    color: "#6A707C",
  },
  register2: {
    flexDirection: "row",
    bottom: -height * 0.31,
    fontSize: width * 0.04,
    alignSelf: "center",
    color: "#FEAB13",
    fontWeight: "bold",
  },
});
