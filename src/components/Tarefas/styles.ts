import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 32,
  },

  tarefasCriadas: {
    flexDirection: "row",
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    paddingBottom: 20,

  },

  textTarefasConCluidas: {
    fontSize: 14,
    color: "#8284FA",
    fontWeight: "bold",
    marginLeft: "auto"

  },

  textTarefasCriadas: {
    fontSize: 14,
    color: "#4EA8DE",
    fontWeight: "bold"
  },

  qntCriadas: {
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },

  textQntCriadas: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#D9D9D9"
  },

  scroll: {
    marginBottom: 100
  }
})