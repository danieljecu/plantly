import * as React from "react";
import { Pressable, Text, StyleSheet, Platform } from "react-native";
import * as Haptics from "expo-haptics";
import { theme } from "@/theme";

type Props = {
  title: string; onPress:() => void;
};
export const PlantlyButton = ({ title, onPress }: Props) => {
  const handlePress = () => {

    onPress();
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={(pressed) => {
        if (pressed) {
          return [styles.button, styles.buttonPressed];
        }
        return styles.button;
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colorGreen,
  },
  buttonPressed: {
    backgroundColor: theme.colorLeafyGreen,
  },
});
