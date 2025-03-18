import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type NewsFooterProps = {
  createdAt: string;
  author: string;
};

export default function NewsFooter({ createdAt, author }: NewsFooterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.createdAt}>{createdAt}</Text>
      <Text style={styles.middleDot}>&#183;</Text>
      <Text style={styles.author}>{author}</Text>
      <MaterialCommunityIcons
        style={styles.threeDots}
        name="dots-horizontal"
        size={24}
        color="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  createdAt: {
    color: "grey",
  },
  middleDot: {
    color: "grey",
  },
  author: {
    color: "grey",
  },
  threeDots: {
    marginLeft: "auto",
  },
});
