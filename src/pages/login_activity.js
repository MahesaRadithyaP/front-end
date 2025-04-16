import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { Checkbox, Text } from "react-native-paper";

export default function App() {
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    console.log("click");
    try {
      const response = await fetch(
        "http://192.168.31.243:8000/apiv1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      console.log(response);
      const data = await response.json();

      if (data.responseCode === 200) {
        console.log("Login Berhasil");
        return;
      }
      setError(data.message);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username, password]);

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.textHero}>LKS GAMBAR</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.headerTop}>
          <Text style={styles.sigin}>Sign In</Text>
          <Text style={styles.bottomTextHeader}>
            Masukan Username Dan Password Untuk Masuk !
          </Text>
        </View>
        <View style={error ? styles.error : styles.errorHidden}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.email}>
            <Text style={styles.textEmail}>Username</Text>
            <TextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="username"
              style={styles.input}
            />
          </View>
          <View style={styles.email}>
            <Text style={styles.textEmail}>Password *</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="password"
              style={styles.input}
            />
          </View>
          <View style={styles.endForm}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
              color="#003366"
            />
            <Text style={styles.checkboxLabel}>Keep me logged in</Text>
          </View>
          <View style={styles.contentBotton}>
            <Button color={"#003366"} title="Sign In" onPress={handleLogin} />
            <View style={styles.bottomContent}>
              <Text style={styles.noAccount}>Belum Punya Akun?</Text>
              <Text style={styles.daftars}>Daftar Disini</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hero: {
    padding: 80,
  },
  textHero: {
    fontFamily: "Montserrat",
    fontSize: 24,
    textAlign: "center",
  },
  content: {
    paddingHorizontal: 20,
  },
  sigin: {
    fontSize: 24,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  bottomTextHeader: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  form: {
    paddingVertical: 5,
  },
  textEmail: {
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderColor: "#003366",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  endForm: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checkboxLabel: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: "#333",
  },
  contentBotton: {
    marginVertical: 20,
  },
  noAccount: {
    fontSize: 14,
    textAlign: "center",
  },
  bottomContent: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    gap: 5,
  },
  daftars: {
    fontSize: 14,
    color: "#003366",
  },
  error: {
    backgroundColor: "#ffe5e5",
    borderColor: "#ff4d4d",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  errorText: {
    color: "#b30000",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  errorHidden: {
    display: "none",
  },
});
