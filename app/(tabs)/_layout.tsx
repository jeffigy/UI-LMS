import { Tabs } from "expo-router";
import {
  Bell,
  BookOpen,
  Calendar,
  Home,
  MessageCircle,
} from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 25,
        },

        headerStyle: {
          backgroundColor: "#f9f9f9",
          elevation: 0,
          shadowOpacity: 0,
        },

        tabBarActiveTintColor: "#135da0",
        tabBarInactiveTintColor: "#cad5e2",

        tabBarStyle: {
          backgroundColor: "#f9f9f9",
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          title: "",
          headerTitle: "Home",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color }) => <Calendar color={color} />,
          title: "",
          headerTitle: "Calendar",
        }}
      />
      <Tabs.Screen
        name="subjects"
        options={{
          tabBarIcon: ({ color }) => <BookOpen color={color} />,
          title: "",
          headerTitle: "Subjects",
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => <MessageCircle color={color} />,
          title: "",
          headerTitle: "Messages",
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color }) => <Bell color={color} />,
          title: "",
          headerTitle: "Notifications",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
