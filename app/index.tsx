import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={Styles.parrenteA}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={require("../assets/images/unsplash_4Tgjeh1fWCc.png")}
      />

      <View style={Styles.firstview}>
        <Text style={Styles.histyle}>le petit souk</Text>
        <Text style={Styles.Titelstyle}>Marocain Traditionnel cuisine</Text>
      </View>

      <Text style={Styles.textp2}>
        bienvenue au coeur des saveurs authentiques du maroc. decouvrez une cuisine genereuse et traditionelle preparee avec passion.
      </Text>

      <TouchableOpacity 
        style={Styles.buttonView}
        onPress={() => router.push("/menu")}
      >
        <Text style={Styles.buttonText}>voir le menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  parrenteA: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 35,
    backgroundColor: "rgba(2, 15, 3, 0.64)",
  },
  firstview: {
    marginTop: 30,
    alignItems: "center",
    width: "100%",
  },
  histyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    textTransform: "capitalize",
  },
  Titelstyle: {
    fontSize: 18,
    color: "#f0f0f0",
    marginTop: 8,
    textAlign: "center",
  },
  textp2: {
    fontSize: 16,
    color: "#e0e0e0",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  buttonView: {
    backgroundColor: "#E5A93C",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
});