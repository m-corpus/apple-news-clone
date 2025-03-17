import { StyleSheet, View, Image, Text } from "react-native";
import { formatDistanceToNow } from "date-fns";

import NewsFooter from "@/components/news/NewsFooter";

import { TNews } from "@/types";

type TopStoriesProps = {
  news: TNews;
};

export default function TopStories({ news }: TopStoriesProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: news.image }} />

      <View style={{ padding: 12, gap: 28 }}>
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
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  publisherImage: {
    width: 60,
    height: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
