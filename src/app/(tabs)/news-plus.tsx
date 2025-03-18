import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListHeader from "@/components/ListHeader";
import Magazine from "@/components/list-items/Magazine";

import featuredMagazines from "@assets/data/featuredMagazines.json";
import popularMagazines from "@assets/data/popularMagazines.json";
import newestMagazines from "@assets/data/newestMagazines.json";

import { TMagazine } from "@/types";

export default function NewsPlusScreen() {
  const [selectedOption, setSelectedOption] = useState("featured");

  let data: TMagazine[] = [];
  if (selectedOption === "featured") {
    data = featuredMagazines;
  } else if (selectedOption === "popular") {
    data = popularMagazines;
  } else if (selectedOption === "newest") {
    data = newestMagazines;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={styles.container}>
        <FlatList
          data={data}
          ListHeaderComponent={<ListHeader title="News+" subTitle="Discover" />}
          renderItem={({ item }) => <Magazine magazine={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 20 }}
          columnWrapperStyle={{ gap: 16 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
