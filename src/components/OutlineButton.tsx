import { StyleSheet, Pressable, Text } from "react-native";

type OutlineButtonProps = {
  text: string;
  color?: string;
  onPress: () => void;
};

export default function OutlineButton({
  text,
  color,
  onPress,
}: OutlineButtonProps) {
  return (
    <Pressable
      style={[styles.container, color && { borderColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.text, color && { color }]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 28,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 100,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    textTransform: "uppercase",
  },
});
