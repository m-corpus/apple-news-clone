import { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import FollowButton from "../FollowButton";
import FollowingButton from "../FollowingButton";

import { TMagazine } from "@/types";

type MagazineProps = {
  magazine: TMagazine;
};

export default function Magazine({ magazine }: MagazineProps) {
  const [isFollow, setIsFollow] = useState(magazine.isFollowing);

  const handleFollow = () => {
    setIsFollow((value) => !value);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: magazine.image }} />
      <Text style={styles.title}>{magazine.title}</Text>

      {isFollow ? (
        <FollowingButton onPress={handleFollow} />
      ) : (
        <FollowButton onPress={handleFollow} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    gap: 8,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});
