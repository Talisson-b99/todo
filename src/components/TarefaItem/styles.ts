import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: "#333333",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

  },

  content: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 17,


  },

  textTarefa: {
    color: "#F2F2F2",
    fontSize: 14,
    flex: 1,
    marginLeft: 8,


  },

  textTarefaMarked: {
    color: "#808080",
    fontSize: 14,
    flex: 1,
    marginLeft: 8,
    textDecorationLine: "line-through"
  },

  iconCheck: {
    color: '#5E60CE',

  },

  iconTrash: {
    color: '#808080',

  }
})