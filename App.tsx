import { Navigation } from "@/navigation";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-background">
      <Navigation />

      <StatusBar style="auto" />
    </View>
  );
}
