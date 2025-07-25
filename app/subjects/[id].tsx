import subjects from "@/assets/data.json";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
const SubjectDetails = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const subject = subjects.find((subject) => subject.id === id);

  useEffect(() => {
    if (subject?.name) {
      navigation.setOptions({
        title: subject.name,
      });
    }
  }, [subject]);

  if (!subject) {
    return (
      <View>
        <Text>Subject not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>SubjectDetails</Text>
    </View>
  );
};

export default SubjectDetails;
