import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function About() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "About " + route.params?.name || "",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Contact", { name: route.params?.name })
        }
      >
        <Text style={styles.buttonText}>Go to contact of {route.params?.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          Já vai meu chapa {route.params?.name}?
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
