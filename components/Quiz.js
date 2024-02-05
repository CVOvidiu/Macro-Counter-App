import { useState } from "react";
import { View, StyleSheet, Text, Pressable, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";

import QuizInput from "./QuizInput";

export default function Quiz() {
  const statusbarHeight = StatusBar.currentHeight;

  const [showQuiz, setShowQuiz] = useState(false); // def. false

  const [username, setUsername] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [measurement, setMeasurement] = useState("Metric");
  const [height, setHeight] = useState(undefined);
  const [weight, setWeight] = useState(undefined);

  return showQuiz ? (
    <>
      <View
        style={{
          paddingTop: statusbarHeight,
          backgroundColor: "lightgrey",
        }}
      ></View>
      <Text style={styles.quizHeader}>Setup Your Track Profile</Text>
      <View style={styles.quizView}>
        <QuizInput
          labelName="Username"
          inputValue={username}
          inputHandler={setUsername}
          placeholder="Your Name"
        />
        <QuizInput
          labelName="Age"
          inputValue={age}
          inputHandler={setAge}
          placeholder="Your Age"
        />
        <Text style={{ color: "#004346", paddingVertical: 5 }}>
          Measure system
        </Text>
        <Picker
          selectedValue={measurement}
          onValueChange={(selectedMeasurement) =>
            setMeasurement(selectedMeasurement)
          }
        >
          <Picker.Item
            style={{ color: "#004346" }}
            label="Metric"
            value="Metric"
          />
          <Picker.Item
            style={{ color: "#004346" }}
            label="Imperial"
            value="Imperial"
          />
        </Picker>
        <QuizInput
          labelName="Height"
          inputValue={height}
          inputHandler={setHeight}
          placeholder="Your Height"
        />
        <QuizInput
          labelName="Weight"
          inputValue={weight}
          inputHandler={setWeight}
          placeholder="Your Weight"
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#172A3A" : "#004346",
              marginTop: 20,
              alignSelf: "center",
            },
            styles.btn,
          ]}
          onPress={() => {}}
        >
          <Text style={{ color: "white" }}>Continue</Text>
        </Pressable>
      </View>
    </>
  ) : (
    <View style={styles.welcomeView}>
      <Text style={styles.header}>{`Welcome to\nMacros Counter App`}</Text>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#172A3A" : "#004346" },
          styles.btn,
        ]}
        onPress={() => {
          setShowQuiz(!showQuiz);
        }}
      >
        <Text style={{ color: "white" }}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // Quiz form
  quizView: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  quizHeader: {
    backgroundColor: "#004346",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },

  // Welcome screen
  welcomeView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 25,
    fontFamily: "Roboto",
    color: "#004346",
    textAlign: "center",
    marginBottom: 30,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    fontSize: 15,
  },
});
