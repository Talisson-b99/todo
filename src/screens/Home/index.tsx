import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { Tarefas } from "../../components/Tarefas";
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newtarefas, setNewTarefas] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imagemHeader}
          source={require("../../../assets/Logo.png")}
        />
      </View>
      <Input
        setTasks={setTasks}
        newtarefas={newtarefas}
        setNewTarefas={setNewTarefas}
      />
      <Tarefas tasks={tasks} setTasks={setTasks} />

      <StatusBar style="light" />
    </View>
  );
}
