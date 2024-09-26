
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { createContext, useContext, useState, useEffect,useCallback, useMemo } from 'react';
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
// import { findBestLanguageTag } from "react-native-localize";

const translations = {
  en: { welcome: "Hello", name: "Charlie", home:"home" },
  gd: { welcome: "GD*Hello", name:"GD*Charlie", home:"GD*home" },
};
// const userSystemPreferredAvailableLanguage = findBestLanguageTag(
//   Object.keys(translations),
// );
// const _language = userSystemPreferredAvailableLanguage?.languageTag ?? "en";

// Set the key-value pairs for the different languages you want to support.

const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode ??"en";

console.log("getLocales",getLocales())
// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
// i18n.locale = 'ja';
// console.log(i18n);

type LanguageProps = "en" | "gd" | string;

interface LanguageContextData {
    currentLanguage: LanguageProps; 
    // isLoading: boolean;
    t: (key: string) => string;
    changeLanguage: (value: LanguageProps)=>void
    // clearLanguageStorage:()=>void
  }
  
  
 const LanguageContext = createContext<LanguageContextData|null>(null);
  
 const useLanguage = ():LanguageContextData =>{
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within an LanguageProvider");
  }
  return context;
}
 const LanguageProvider = ({ children }) => {
  
      const [currentLanguage, setCurrentLanguage] = React.useState(i18n.locale);
      const [isLoading, setIsLoading] = React.useState<boolean>(true);
    
      const changeLanguage = (lang: string) => {
        setCurrentLanguage(lang);
        i18n.locale=lang;
        // Persist language in AsyncStorage
      };

      // useEffect(() => {
      //   i18n.locale = currentLanguage;
      //   changeLanguage(currentLanguage)
      //   // Load language from AsyncStorage or any other side-effect
      // }, [currentLanguage, changeLanguage]);
    
    
    
      return (
        <LanguageContext.Provider value={{
          t: (key: string) => i18n.t(key), //not enough to pass i18n.t
          changeLanguage,
          currentLanguage,
        }}>
          {children}
        </LanguageContext.Provider>
      );
    };


    export {useLanguage,LanguageProvider, LanguageContext }