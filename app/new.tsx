import { View, Text, StyleSheet, ScrollView, TextInput, Alert, Touchable, TouchableOpacity, Platform} from "react-native";
import { theme } from "@/theme";
import { useState } from "react";
import {PlantlyButton} from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";
import { usePlantStore } from "@/store/plantsStore";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";


export default function NewScreen() {
  const [imageUri, setImageUri] = useState<string>("");  
  const [name, setName] = useState("");
    const [days, setDays] = useState(7);
    const router = useRouter()


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
      addPlant(name, Number(days), imageUri);
      router.navigate("/")

    }
    const handleChooseImage = async ()=>{
      if(Platform.OS==="web"){
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1,1],
        quality: 1
      })

      if(!result.canceled ){
        setImageUri(result.assets[0].uri)
      }

    }
  return (
    <ScrollView  style={styles.container}>
      <TouchableOpacity style={styles.centered} activeOpacity={0.8} onPress={handleChooseImage}> 
             <PlantlyImage imageUri={imageUri}  />
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
  centered: {alignItems: "center",marginBottom:24 }
});