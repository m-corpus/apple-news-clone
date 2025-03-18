import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "black" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="newspaper" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news-plus"
        options={{
          title: "News+",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="contact-book" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: "Sports",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="basketball" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="audio"
        options={{
          title: "Audio",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="file-audio" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="following"
        options={{
          title: "Following",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="link" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
