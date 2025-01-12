import { FlatList } from "react-native";

import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/Category/Category";

type Props = {
  selected: string;
  onChange: (caterory: string) => void;
};

export function Categories({ selected, onChange }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    />
  );
}
