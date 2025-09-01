import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import React, { useState } from "react";
import { Home } from "./src/screens/Home/Home";
import { DefaultInput } from "./src/components/DefaultInput/DefaultInput";
import { SignIn } from "./src/screens/SignIn/SignIn";

export default function App() {
  const [user, setUser] = useState(false);
  const [message, setMessage] = useState("Sign In");

  function handleUser() {
    if (user === false) {
      setUser(true);
      setMessage("Sign In");
    } else {
      setUser(false);
      setMessage("Already have an account ?");
    }
  }

  return (
    <View style={styles.container}>
      {user === true ? <Home /> : <SignIn />}

      <TouchableOpacity onPress={handleUser} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.span}>{message}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
