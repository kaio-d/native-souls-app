import React from "react";
import { View, TextInput } from "react-native";

import { styles } from "./DefaultInputStyle";

export function DefaultInput({ placeholder }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={"#fff"}
    />
  );
}
