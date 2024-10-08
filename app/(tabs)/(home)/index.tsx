import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { theme, Colors } from "@/theme";
import { usePlantStore } from '@/store/plantsStore';
import { PlantCard } from '@/components/PlantCard';
import { PlantlyButton } from '@/components/PlantlyButton';
import { useRouter } from 'expo-router';
import { MyCheckbox } from '@/components/MyCheckbox';
import { useLanguage } from '@/locales';



export default function App() {
  const router= useRouter()
  const plants = usePlantStore(state=> state.plants)
  const {t} = useLanguage()

  return (

    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>{t("welcome")} User</Text>
      <View style={styles.checkboxContainer}>
        <MyCheckbox style={{
            marginRight: 10,
            height: 48,
            width: 48
          }}/>
        <Text style={styles.checkboxLabel}>{`⬅️ Click!`}</Text>
      </View>
      <FlatList data={plants}
        style={styles.contentContainer}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item})=>
          <PlantCard plant={item}/>
        }
        ListEmptyComponent={<PlantlyButton title="Add your first plant" onPress={()=>router.navigate("/new")}/>} 
        />

    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    backgroundColor: theme.colorWhite
  },
  contentContainer:{
    flex:1,
    padding:12
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },
});
