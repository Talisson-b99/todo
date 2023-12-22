import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: -28,
    flexDirection: "row",
    gap: 4,
  },

  input: {
    flex: 1,
    width: "100%",
    height: 54,
    backgroundColor: "#262626",
    padding: 16,
    color: "#F2F2F2",
    fontSize: 16,
    borderRadius: 8,
  },

  buttonInput: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    borderRadius: 6
  },

  buttonIcon: {
    color: '#fff',

  }
})