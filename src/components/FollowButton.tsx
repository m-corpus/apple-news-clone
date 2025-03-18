import { StyleSheet, Pressable, Text } from "react-native";

type FollowButtonProps = {
  onPress: () => void;
};

export default function FollowButton({ onPress }: FollowButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Follow</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 28,
    borderWidth: 1,
    borderColor: "orangered",
    borderRadius: 100,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "orangered",
    textTransform: "uppercase",
  },
});
