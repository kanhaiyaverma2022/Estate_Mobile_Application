import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text  className="font-bold text-red-500 border">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/sign-in"><Text>Sign in</Text></Link>
      <Link href="/profile"><Text>Profile</Text></Link>
      <Link href="/explore"><Text>Explore</Text></Link>
      <Link href="/properties/1"><Text>Sign in</Text></Link>
    </View>
  );
}
