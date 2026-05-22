import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity, 
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const MENU_DATA = [
  { id: 1, name: "Tajine Poulet", type: "Plat Chaud", price: "55 MAD", image: require("../assets/images/tajine.png") },
    { id: 2, name: "Couscous Royal", type: "Plat Chaud", price: "65 MAD", image: require("../assets/images/couscous.png") },
    { id: 3, name: "Thé à la Menthe", type: "Boisson", price: "12 MAD", image: require("../assets/images/the.png") },
    { id: 4, name: "Msemen au Miel", type: "Petit-Déjeuner", price: "15 MAD", image: require("../assets/images/msemen.png") },
    { id: 5, name: "Harira avec Chebakia", type: "Plat Chaud", price: "55 MAD", image: require("../assets/images/harira.png") },
    { id: 6, name: "Pastilla au Pigeon", type: "Entrée", price: "45 MAD", image: require("../assets/images/pastilla.png") },
    { id: 7, name: "Jus d'Orange Frais", type: "Boisson", price: "18 MAD", image: require("../assets/images/jus.png") },
  ];

export default function MenuScreen() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.foodImage} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodType}>{item.type}</Text>
        <Text style={styles.foodPrice}>{item.price}</Text>
      </View>


    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1E352F" />
        </TouchableOpacity>
        
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search" 
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
        </View>

        
      </View>

      <FlatList
        data={MENU_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFDDDD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#EFDDDD',
  },
  backButton: {
    padding: 5,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFDDDD',
    borderRadius: 25,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  cartIconContainer: {
    position: 'relative',
  },
  listContent: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#4e31317c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  foodName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f2b23af',
  },
  foodType: {
    fontSize: 13,
    color: '#777',
    marginVertical: 4,
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E5A93C',
  },
  addButton: {
    backgroundColor: '#1E352F',
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});