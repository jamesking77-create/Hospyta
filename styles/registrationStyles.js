import { StyleSheet } from "react-native";

export default StyleSheet.create({
  textInput: {
    backgroundColor: 'none',
    outline: 'none',
    borderColor: 'none',
    width: 400,
    borderWidth: 0,
  },

  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  registerBotton: {
    backgroundColor: "blue",
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
  },

  googleAuthBotton: {
    flexDirection: 'row',
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 1,
    paddingVertical: 10,
    alignItems: "center",
    color: 'black'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 9,
    borderRadius: 6,
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'transparent', 
  },

  icon: {
    marginRight: 10, 
  }
});
