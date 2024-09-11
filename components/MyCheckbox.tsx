
import React, { useState } from "react";

import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
// import type { TouchableProps } from "react-native-gesture-handler/@react-native";
// import type { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheet";

import { StatusBar } from 'expo-status-bar';
import { theme, Colors } from "@/theme";

// import styles from "./styles";
// import { Strings } from "../../Helpers/Constants";

// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

// const  stylesC =  StyleSheet.create({
//   container: {
//     width: 35,
//     height: 35,
//     backgroundColor: Colors.white,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: Colors.darkPurple,
//   },
//   rememberText: {
//     ...Typography.p3(Colors.darkPurple),
//   },
//   checkboxWrapper: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// type Props = {
//   defaultValue?: boolean;
//   touchableProps?: TouchableProps;
//   style?: ViewStyle;
//   title?: string;
//   accessibilityHintAction?: string;
// };

const CheckBox = ({ defaultValue, touchableProps, style, title, accessibilityHintAction }: Props) => {
  const [isSelected, setSelection] = useState<boolean>(!!defaultValue);
  const isIos = Platform.OS === "ios";
  const checkboxStatus = isSelected ? "checked" : "unchecked";
  const accessibilityHint = ""  //Strings.checkbox_accessibility_hint(  isSelected,accessibilityHintAction)


  const onPress = (): void => {
    touchableProps &&
      touchableProps.onPress &&
      touchableProps.onPress(!isSelected);
    setSelection((prev) => !prev);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={stylesC.checkboxWrapper}
      accessibilityRole="checkbox"
      accessibilityState={{ checked:isSelected }}

    >
      <TouchableOpacity
        onPress={onPress}
        style={{ ...stylesC.container, ...style }}
        accessibilityRole="checkbox"
        accessibilityState={{ checked:isSelected }}
        accessibilityLabel={isIos ? `${Strings.checkbox_accessibility_label} ${title} ${checkboxStatus}` : ""}
        accessibilityHint={accessibilityHint}
      >
        {isSelected && (
          <FontAwesomeIcon
            icon={faCheck}
            size={IconSize.preMedium.width}
            color={Colors.darkPurple}
          />
        )}
      </TouchableOpacity>
      <Text
        style={stylesC.rememberText}
        accessibilityLabel= ""//{!isIos ? `${Strings.checkbox_label_accessibility_label} ${title} ${checkboxStatus}` : ""}
        accessibilityHint={accessibilityHint}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// export React.memo(CheckBox);

import { Ionicons } from '@expo/vector-icons';

export function MyCheckbox({
  defaultValue = false,
  onChange,
  accessibilityHintAction
}) {
  const [isSelected, setSelection] = useState<boolean>(!!defaultValue);

  const onPress = (): void => {
    // touchableProps &&
    //   touchableProps.onPress &&
    //   touchableProps.onPress(!isSelected);
    setSelection((prev) => !prev);
  };
  return (
    <Pressable
      style={[styles.checkboxBase, isSelected && styles.checkboxChecked]}
      onPress={onPress}
    >
      {isSelected && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}


const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
});
