import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[400],
  },
});
