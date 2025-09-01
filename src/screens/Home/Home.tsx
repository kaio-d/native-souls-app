import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./HomeStyle";
const logo = require("../../../assets/logo.png");

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>SOULS APP</Text>

      <Image style={styles.imageConfig} source={logo} />
    </View>
  );
}
