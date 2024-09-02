export const theme = {
  colorGreen: "#29b365",
  colorWhite: "#fff",
  colorLeafyGreen: "#206a42",
  colorAppleGreen: "#a0d36c",
  colorLimeGreen: "#d0e57e",
};

export const Colors = {
  whiteOpacity: (opacity: number): string => `rgba(255, 255, 255, ${opacity})`,
  white: "#ffffff",
  black: "#000000",
  shadowGray: "#CECDCD",
  gray: "#808080",
  darkGray: "#676869",
  swiftBackground: "#84329b",
  lightPurple: "#7a42f4",
  darkPurple: "#3C1053",
  lightGray: "#ecf0f1",
  red: "#ee0000",
  purple: "#9D5BAF",
  borderColor: "#707070",
  drawerColor: "#f3e6ff",
  serviceColor: "#231F20",
  lessPurple: "#84329B",
  spinnerBackground: "#00000066",
  offPurple: "#e6d6eb",
  enterpriseButtonColor: "#1D7EC4",
  orange: "#B75E00",
  cancelColor: "#D4351C",
  green: "#00703C",
  lightGreen: "#679500",
  darkGreen: "#385723",
  whiteSmoke: "#F9F9F9",
  berylBtnColor: "#477334",
  permissionColor: "#84329B",
} as const;

export type ColorsType = (typeof Colors)[keyof typeof Colors];
