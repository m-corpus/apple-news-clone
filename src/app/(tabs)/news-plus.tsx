import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListHeader from "@/components/ListHeader";
import Magazine from "@/components/list-items/Magazine";
import Select from "@/components/Select";

import featuredMagazines from "@assets/data/featuredMagazines.json";
import popularMagazines from "@assets/data/popularMagazines.json";
import newestMagazines from "@assets/data/newestMagazines.json";

import { TMagazine } from "@/types";

export default function NewsPlusScreen() {
  const [selectedOption, setSelectedOption] = useState("Featured");

  let data: TMagazine[] = [];
  if (selectedOption === "Featured") {
    data = featuredMagazines;
  } else if (selectedOption === "Popular") {
    data = popularMagazines;
  } else if (selectedOption === "Newest") {
    data = newestMagazines;
  }

  const handleFilter = (option: string) => setSelectedOption(option);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={styles.container}>
        <FlatList
          data={data}
          ListHeaderComponent={
            <View>
              <ListHeader title="News+" subTitle="Discover" />
              <Select
                label="Showing:"
                options={["Featured", "Popular", "Newest"]}
                selectedOption={selectedOption}
                onChange={handleFilter}
              />
            </View>
          }
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
