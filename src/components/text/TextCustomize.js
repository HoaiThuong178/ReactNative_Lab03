import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import { useMemo } from "react";
import { Text } from "react-native";

const TextCustomize = ({ style, children, ...props }) => {
  const { loaded } = useFonts({ Roboto_400Regular });
  const styles = useMemo(() => {
    const styles = Array.isArray(style) ? style : [style];

    if (loaded) styles.push({ fontFamily: "Roboto_400Regular" });

    return styles;
  }, [style, loaded]);

  return (
    <Text style={styles} {...props}>
      {children}
    </Text>
  );
};

export default TextCustomize;
