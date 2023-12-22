import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Entypo";
import IconTrash from "react-native-vector-icons/Feather";
import IconCircle from "react-native-vector-icons/AntDesign";
import { Dispatch, SetStateAction, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

interface Props {
  task: string;
  handleRemove: () => void;
  setQuantityTask: Dispatch<SetStateAction<string[]>>;
  quantityTask: string[];
}
export function TaferaItem({
  task,
  handleRemove,
  setQuantityTask,
  quantityTask,
}: Props) {
  const [markded, setMarked] = useState(true);

  function handleMarked() {
    setMarked(!markded);
    if (quantityTask.includes(task)) {
      return setQuantityTask(quantityTask.filter((item) => item != task));
    }
    setQuantityTask((state) => [...state, task]);
  }

  return (
    <View style={styles.container}>
      {markded ? (
        <TouchableWithoutFeedback onPress={handleMarked}>
          <View style={styles.content}>
            <Icon name="circle" size={24} style={styles.iconCheck} />
            <Text style={styles.textTarefa}>{task}</Text>
            <TouchableWithoutFeedback onPress={handleRemove}>
              <IconTrash name="trash-2" size={24} style={styles.iconTrash} />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={handleMarked}>
          <View style={styles.content}>
            <IconCircle name="checkcircle" size={24} style={styles.iconCheck} />
            <Text style={styles.textTarefaMarked}>{task}</Text>

            <TouchableWithoutFeedback onPress={handleRemove}>
              <IconTrash name="trash-2" size={24} style={styles.iconTrash} />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
