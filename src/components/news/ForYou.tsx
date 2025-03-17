import { StyleSheet, View, Text, Image } from "react-native";
import { formatDistanceToNow } from "date-fns";

import NewsFooter from "./NewsFooter";

import { TNews } from "@/types";

type ForYouProps = {
  news: TNews;
};

export default function ForYou({ news }: ForYouProps) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={{ flexShrink: 1, gap: 4 }}>
          <Image
            style={styles.publisherImage}
            source={require("@assets/black-logo.png")}
            resizeMode="contain"
          />
          <Text style={styles.title}>{news.title}</Text>
        </View>

        <Image
          style={styles.image}
          source={{ uri: news.image }}
          resizeMode="contain"
        />
      </View>

      <NewsFooter
        createdAt={formatDistanceToNow(news.created_at, { addSuffix: true })}
        author={news.author.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 28,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 12,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  publisherImage: {
    width: 60,
    height: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  image: {
    width: 120,
    aspectRatio: 4 / 3,
    borderRadius: 12,
  },
});
