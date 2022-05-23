import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, StackActions } from "@react-navigation/native";

import React from "react";

export default function Contact() {
  const route = useRoute();
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.buttonText}>Eai {route.params?.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleHome}
      >
        <Text style={styles.buttonText}>
          Já pá home maluco
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4286f4",
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
