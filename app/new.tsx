import { View, Text, StyleSheet, ScrollView, TextInput, Alert} from "react-native";
import { theme } from "@/theme";
import { useState } from "react";
import {PlantlyButton} from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";


export default function NewScreen() {
    const [name, setName] = useState("");
    const [days, setDays] = useState(7);

    const handleSubmit = ()=>{
        if(!name){
            Alert.alert("Validation Error", "Give your plant a name.")
        }

        if(!days){
            Alert.alert("Validation Error", `How often does ${name} need to be watered?`)
        }
        if(Number.isNaN(days)){
            Alert.alert("Validation Error", `Wattering Frequency must to be a number?`)
        }
        console.log("Adding plant", name, days);

    }
 
  return (
    <ScrollView  style={styles.container}>
      <PlantlyImage style={styles.centered}/>

      <View style={styles.centered}>
        <Text>Name</Text>
        <TextInput value={name}
        placeholder="E.g. Astragalus"
        onChangeText={setName}
  />
        <Text>Wattering Frequency</Text>

        <TextInput value={days}
          onChangeText={setDays}
          placeholder="E.g. 6"
          keyboardType="number-pad"
        />
      <PlantlyButton title="Add plant" onPress={handleSubmit} />
      </View>

     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer:{paddingTop: 24, paddingHorizontal: 24},
  centered: {alignItems: "center",}
});