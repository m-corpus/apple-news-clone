import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Menu } from "react-native-paper";

type SelectProps = {
  label: string;
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
};

export default function Select({
  label,
  options,
  selectedOption,
  onChange,
}: SelectProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleFilter = (option: string) => {
    onChange(option);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Menu
        contentStyle={styles.menuContainer}
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        anchor={
          <Pressable
            style={styles.selectContainer}
            onPress={() => setIsVisible(true)}
          >
            <Text style={styles.selectedOption}>{selectedOption}</Text>
            <FontAwesome6 name="angle-down" size={18} color="orangered" />
          </Pressable>
        }
        anchorPosition="bottom"
        mode="flat"
      >
        {options.map((option) => (
          <Menu.Item
            key={option}
            title={option}
            onPress={() => handleFilter(option)}
          />
        ))}
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 32,
    gap: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: "800",
  },
  menuContainer: {
    backgroundColor: "white",
  },
  selectContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  selectedOption: {
    color: "orangered",
    fontSize: 18,
    fontWeight: "800",
  },
});
