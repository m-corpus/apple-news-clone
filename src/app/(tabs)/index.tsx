import { StyleSheet, View, SectionList } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";

import ListHeader from "@/components/ListHeader";
import SectionHeader from "@/components/SectionHeader";
import TopStories from "@/components/list-items/TopStories";
import TrendingStories from "@/components/list-items/TrendingStories";
import ForYou from "@/components/list-items/ForYou";

import homeNews from "@assets/data/homeNews.json";
import { TNews } from "@/types";

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

  const renderItem = (item: TNews, index: number, sectionTitle: string) => {
    let component = null;

    if (sectionTitle === "Top Stories") {
      component =
        index === 0 ? <TopStories news={item} /> : <ForYou news={item} />;
    } else if (sectionTitle === "Trending Stories") {
      component = <TrendingStories index={index + 1} news={item} />;
    } else if (sectionTitle === "For You") {
      component = <ForYou news={item} />;
    }

    return <Link href={`/news/${item.id}`}>{component}</Link>;
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={styles.container}>
        <SectionList
          sections={homeNews}
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
          renderItem={({ item, index, section }) =>
            renderItem(item, index, section.title)
          }
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
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
