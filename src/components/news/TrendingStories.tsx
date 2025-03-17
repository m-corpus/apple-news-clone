import { StyleSheet, View, Text, Image } from "react-native";
import { formatDistanceToNow } from "date-fns";

import NewsFooter from "@/components/news/NewsFooter";

import { TNews } from "@/types";

type TrendingStoriesProps = {
  index: number;
  news: TNews;
};

export default function TrendingStories({ index, news }: TrendingStoriesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.bubbleContainer}>
        <Text style={styles.bubbleText}>{index}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={{ gap: 4 }}>
          <Image
            style={styles.publisherImage}
            source={require("@assets/black-logo.png")}
            resizeMode="contain"
          />
          <Text style={styles.title}>{news.title}</Text>
        </View>

        <NewsFooter
          createdAt={formatDistanceToNow(news.created_at, { addSuffix: true })}
          author={news.author.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 24,
  },
  bubbleContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
  },
  bubbleText: {
    color: "white",
    fontWeight: "500",
  },
  detailsContainer: {
    flexShrink: 1,
    gap: 28,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 12,
  },
  publisherImage: {
    width: 60,
    height: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});
