import { Navigation } from "@/navigation";
import { store } from "@/redux/store";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

export default function App() {
  return (
    <View className="flex-1 bg-background">
      <Provider store={store}>
        <Navigation />

        <StatusBar style="auto" />
        <Toast />
      </Provider>
    </View>
  );
}
