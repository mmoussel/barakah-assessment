import { Platform } from "react-native";

import { initialWindowMetrics } from "react-native-safe-area-context";

export const STATUS_BAR_PADDING =
  Platform.select({
    ios: initialWindowMetrics?.insets.top || 0,
    android: 0,
  }) || 0;
