import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getLocales } from "expo-localization";
import React from "react";
// import { findBestLanguageTag } from "react-native-localize";
import {useLanguage} from "@/locales"

export default function Localisation() {
  const context  =  useLanguage()

  if (!context){
    return <>loading</>
  }

  console.log(context.changeLanguage, "VALUE")

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {context?.t("welcome")} {context?.t("name")}
      </Text>
      {/* <Text>Current locale:{context?.currentLanguage} </Text> */}
      <Text>Device locale: {JSON.stringify(context.currentLanguage)}</Text>

      <>
            <TouchableOpacity onPress={() => console.log(context?.changeLanguage("gd")) }>
                <Text>Switch to GD</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log(context?.changeLanguage("en"))}>
                <Text>Switch to EN</Text>
            </TouchableOpacity>
            </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
});
