import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setTasks: Dispatch<SetStateAction<string[]>>;
  setNewTarefas: (task: string) => void;
  newtarefas: string;
};

export function Input({ setTasks, newtarefas, setNewTarefas }: Props) {
  function handleAddTask() {
    setTasks((state: string[]) => {
      return [...state, newtarefas];
    });
    setNewTarefas("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
        onChangeText={(evento) => setNewTarefas(evento)}
        value={newtarefas}
      />
      <TouchableOpacity style={styles.buttonInput} onPress={handleAddTask}>
        <Icon name="pluscircleo" size={20} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}
