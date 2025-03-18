import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { useLocalSearchParams, Stack, router } from "expo-router";
import { FontAwesome6, Entypo } from "@expo/vector-icons";
import { format } from "date-fns";
import Markdown from "react-native-markdown-display";

import allNews from "@assets/data/allNews.json";

export default function NewsDetailsScreen() {
  const { id } = useLocalSearchParams();

  const news = allNews.find((news) => news.id === id);

  if (!news) {
    return null;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: news.image }} />

        <View style={styles.detailsContainer}>
          <View style={{ gap: 12 }}>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.publishedDetails}>
              by {news.author.name}{" "}
              {format(news.created_at, "MMM dd, yyyy hh:mm a")}
            </Text>
          </View>

          <Markdown style={styles}>{news.body}</Markdown>
        </View>

        <Stack.Screen
          options={{
            headerTitle: news.publisher.name,
            headerLeft: () => (
              <FontAwesome6
                name="chevron-left"
                size={20}
                color="black"
                onPress={() => router.back()}
              />
            ),
            headerRight: () => (
              <View style={styles.actionButtonsContainer}>
                <View style={styles.actionButton}>
                  <Entypo name="share-alternative" size={16} color="black" />
                </View>
                <View style={styles.actionButton}>
                  <Entypo
                    name="dots-three-horizontal"
                    size={16}
                    color="black"
                  />
                </View>
              </View>
            ),
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  detailsContainer: {
    padding: 24,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  publishedDetails: {
    color: "grey",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    backgroundColor: "gainsboro",
    padding: 8,
    borderRadius: 16,
  },
  heading2: {
    marginVertical: 8,
  },
  heading3: {
    marginVertical: 8,
  },
});
