import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { TaferaItem } from "../TarefaItem";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  tasks: string[];
  setTasks: Dispatch<SetStateAction<string[]>>;
};

export function Tarefas({ tasks, setTasks }: Props) {
  const [quantityTask, setQuantityTask] = useState<string[]>([]);

  function handleRemove(task: string) {
    Alert.alert("Deletar tarefa", `Você deseja remover a tarefa ${task}`, [
      {
        text: "SIM",
        onPress: () => {
          setTasks(tasks.filter((item) => item != task));
          setQuantityTask(quantityTask.filter((item) => item != task));
        },
      },
      {
        text: "NÃO",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tarefasCriadas}>
        <Text style={styles.textTarefasCriadas}>Criadas</Text>
        <View style={styles.qntCriadas}>
          <Text style={styles.textQntCriadas}>{tasks.length}</Text>
        </View>

        <Text style={styles.textTarefasConCluidas}>Concluídas</Text>
        <View style={styles.qntCriadas}>
          <Text style={styles.textQntCriadas}>{quantityTask.length}</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {tasks.map((task) => (
          <TaferaItem
            key={task}
            task={task}
            handleRemove={() => handleRemove(task)}
            setQuantityTask={setQuantityTask}
            quantityTask={quantityTask}
          />
        ))}
      </ScrollView>
    </View>
  );
}
