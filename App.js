import { SafeAreaView } from "react-native";

import Quiz from "./components/Quiz";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Quiz />
    </SafeAreaView>
  );
}
