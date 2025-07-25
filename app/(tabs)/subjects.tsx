import subjects from "@/assets/data.json";
import { Subject as SubjectType } from "@/types/subject";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const SubjectsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <FlatList
        renderItem={({ item }) => <Subject item={item} />}
        data={subjects}
      />
    </View>
  );
};

const Subject = ({ item }: { item: SubjectType }) => {
  return (
    <Link
      href={{
        pathname: "/subjects/[id]",
        params: { id: item.id },
      }}
      asChild
    >
      <Pressable
        style={{
          marginHorizontal: 20,
          padding: 10,
          backgroundColor: "#fff",
          marginBottom: 10,
          borderRadius: 10,

          gap: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 12, fontWeight: "300" }}>
            {item.teacher}
          </Text>
        </View>
        <Text style={{ fontSize: 16 }}>{item.room}</Text>
      </Pressable>
    </Link>
  );
};

export default SubjectsScreen;
