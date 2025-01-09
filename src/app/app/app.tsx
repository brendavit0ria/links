import { View, Image, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Categories } from "@/components/Categories/Categories";
import { Link } from "@/components/Link/Link";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3", "4", "5", "6"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="google"
            url="https://www.google.com/"
            onDetails={() => console.log("clicou")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
