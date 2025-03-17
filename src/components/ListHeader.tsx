import { StyleSheet, View, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type ListHeaderProps = {
  title: string;
  subTitle: string;
};

export default function ListHeader({ title, subTitle }: ListHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <FontAwesome6 name="apple" size={28} color="black" />
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },
  subTitle: {
    color: "grey",
    fontSize: 28,
    fontWeight: "800",
  },
});
