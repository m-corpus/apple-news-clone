import { StyleSheet, View, Text } from "react-native";

export default function FollowingScreen() {
  return (
    <View style={styles.container}>
      <Text>Following Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
