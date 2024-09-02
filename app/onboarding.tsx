import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/PlantlyImage";

export default function OnboardingScreen() {

  const router = useRouter();

  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = ()=> {
    toggleHasOnboarded();
    router.replace("/");
  };
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen]}
      style={styles.container}>

      <StatusBar style="light" />
      <Text style={styles.heading}>Plantly</Text>
      <Text style={styles.tagline}>Keep your plants healthy and hydrated</Text>
      <PlantlyImage />
      <PlantlyButton title={"Let me in"} onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 8
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12
  },
  tagline:{
    fontSize:24,
    color:theme.colorWhite,
    textAlign:"center"

  }

});