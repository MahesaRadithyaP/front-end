import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from "react-native";

export default function Home() {
  const [total, setTotal] = useState(0);

  const products = [
    {
      id: 1,
      name: "Fanta Orange",
      price: 6000,
      imageUri:
        "https://image.astronauts.cloud/product-images/2024/4/FantaOrangeVitCBotol1000ml_9ad4e727-ed1a-423b-8fca-2a99a22aedb0_900x900.png",
    },
    {
      id: 2,
      name: "Sprite Lemon",
      price: 7500,
      imageUri:
        "https://c.alfagift.id/product/1/1_A12700003254_20240415135146818_base.jpg",
    },
    {
      id: 3,
      name: "Pepsi Cola",
      price: 5000,
      imageUri:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lxkopcaurpym37",
    },
  ];

  const handleBuy = (price) => {
    setTotal((prevTotal) => prevTotal + price);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.productContainer}>
          {products.map((product) => (
            <View key={product.id} style={styles.card}>
              <Image source={{ uri: product.imageUri }} style={styles.image} />
              <View style={styles.moreDetail}>
                <Text style={styles.titleProduct}>{product.name}</Text>
                <Text style={styles.priceText}>Rp. {product.price}</Text>
                <View style={styles.actionButton}>
                  <Button
                    title="Buy"
                    color="#FF69B4"
                    onPress={() => handleBuy(product.price)}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: Rp. {total}</Text>
        <Button
          title="Bayar"
          onPress={() => console.log("Pembayaran Dilakukan")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  productContainer: {
    flexDirection: "column",
    gap: 25,
  },
  card: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  moreDetail: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
  },
  titleProduct: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 14,
    color: "#333",
  },
  actionButton: {
    marginTop: 10,
    width: "50%",
  },
  totalContainer: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
