import { StyleSheet, View, SectionList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";

import ListHeader from "@/components/ListHeader";
import SectionHeader from "@/components/SectionHeader";

import homeNews from "@assets/data/homeNews.json";

export default function HomeScreen() {
  const getSectionHeaderProps = (sectionTitle: string) => {
    let subTitle = "";
    let color = "";

    if (sectionTitle === "Top Stories") {
      subTitle = "Chosen by the Apple news editors.";
      color = "orangered";
    } else if (sectionTitle === "Trending Stories") {
      color = "orange";
    } else if (sectionTitle === "For You") {
      subTitle = "Recommendations based on topics & channels you read.";
      color = "green";
    }

    return {
      subTitle,
      color,
    };
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SectionList
          sections={homeNews}
          renderItem={({ item }) => <Text>Hello World</Text>}
          ListHeaderComponent={
            <ListHeader title="News" subTitle={format(new Date(), "MMMM dd")} />
          }
          renderSectionHeader={({ section }) => {
            const { subTitle, color } = getSectionHeaderProps(section.title);
            return (
              <SectionHeader
                title={section.title}
                subTitle={subTitle}
                color={color}
              />
            );
          }}
          stickySectionHeadersEnabled={false}
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
