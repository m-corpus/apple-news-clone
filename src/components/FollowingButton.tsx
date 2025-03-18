import { StyleSheet, Pressable, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type FollowingButtonProps = {
  onPress: () => void;
};

export default function FollowingButton({ onPress }: FollowingButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FontAwesome6 name="check" size={16} color="grey" />
      <Text style={styles.text}>Following</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "grey",
    textTransform: "uppercase",
  },
});
