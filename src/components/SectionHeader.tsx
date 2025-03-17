import { StyleSheet, View, Text } from "react-native";

type SectionHeaderProps = {
  title: string;
  subTitle?: string;
  color: string;
};

export default function SectionHeader({
  title,
  subTitle,
  color,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color }]}>{title}</Text>

      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },
  subTitle: {
    color: "grey",
  },
});
