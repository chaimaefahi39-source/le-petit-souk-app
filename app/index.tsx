import {Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <>
    <Image
      style= {[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
      source = {require("../assets/images/unsplash_4Tgjeh1fWCc.png")}
    />

    <View style={Styles.parrenteA}>
  <View style={Styles.firstview}>
    <Text style={Styles.h1style}> le petit souk </Text>
    <Text style={Styles.Titelstyle}>
     Marocain Traditionnel cuisine
    </Text>
  </View>


  <Text style={Styles.textp2}>
    bienvenue au coeur des saveurs authentiques du maroc . decouvrez une cuisine genereuse et traditionelle preparee avec passion.
  </Text>
</View>

<TouchableOpacity
  style={Styles.buttonView}>
    <Text style={Styles.buttonText}>Voir Le Menu</Text>
  </TouchableOpacity>

</>
)
}
const Styles = StyleSheet.create({
  parrenteA: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(6, 26, 8, 0.64)",
  },
  firstview: {
    marginTop: 100,
    alignItems: "center",           
  },
  h1style: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#d3b8b8",
  },
  Titelstyle: {
    fontSize: 20,
    color: "#d3b8b8",
    marginTop: 10,
  },
  image2: {
    width: 300,
    height: 200,
    marginTop: 50,
    borderRadius: 10,
  },
  textp2: {
    fontSize: 16,
    color: "#d3b8b8",
    textAlign: "center",
    paddingBottom: 450,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonView: {
    backgroundColor: "#b19412",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginBottom: 40,
    
  },
  buttonText: {
    color: "#dcebdd",
    fontWeight: "bold",
    fontSize: 16,
  },
});
