import { View, Text, StyleSheet, ScrollView, TextInput, Alert, Touchable, TouchableOpacity} from "react-native";
import { theme } from "@/theme";
import { useState } from "react";
import {PlantlyButton} from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";
import { usePlantStore } from "@/store/plantsStore";


export default function NewScreen() {
    const [name, setName] = useState("");
    const [days, setDays] = useState(7);

    const addPlant = usePlantStore(state=>state.addPlant);

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
      addPlant(name, days)

    }
    // const handleChooseImage = async ()=>{

    // }
  return (
    <ScrollView  style={styles.container}>
      <TouchableOpacity style={styles.centered} activeOpacity={0.8}> 
             <PlantlyImage />
      </TouchableOpacity>

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