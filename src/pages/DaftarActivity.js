import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function Daftar({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const daftar = async () => {
    if (username && password && nama && alamat && telepon) {
      const url = "http://192.168.31.243:8000/apiv1/auth/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          nama: nama,
          alamat: alamat,
          telepon: telepon,
        }),
      });
      const data = await response.json();
      console.log(data.message);
      if (data.success === true) {
        navigation.navigate("Login",);
      } else {
        setError(data.message);
        return;
      }
    }
    return setError("Mohon isi semua form");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.textHero}>LKS GAMBAR</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.headerTop}>
          <Text style={styles.sigin}>Sign Up</Text>
          <Text style={styles.bottomTextHeader}>
            Masukan Data Dibawah Untuk Mendaftar!
          </Text>
        </View>
        <View style={error ? styles.error : styles.errorHidden}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        <View style={styles.form}>
          {/* Input Nama */}
          <View style={styles.formInput}>
            <Text style={styles.textEmail}>Nama</Text>
            <TextInput
              value={nama}
              onChangeText={(text) => setNama(text)}
              placeholder="Nama lengkap"
              style={styles.input}
            />
          </View>
          {/* Input Alamat */}
          <View style={styles.formInput}>
            <Text style={styles.textEmail}>Alamat</Text>
            <TextInput
              value={alamat}
              onChangeText={(text) => setAlamat(text)}
              placeholder="Alamat lengkap"
              style={styles.input}
            />
          </View>
          {/* Input Telepon */}
          <View style={styles.formInput}>
            <Text style={styles.textEmail}>Telepon</Text>
            <TextInput
              value={telepon}
              onChangeText={(text) => setTelepon(text)}
              placeholder="Nomor telepon"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>
          {/* Input Username */}
          <View style={styles.formInput}>
            <Text style={styles.textEmail}>Username</Text>
            <TextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="username"
              style={styles.input}
            />
          </View>
          {/* Input Password */}
          <View style={styles.formInput}>
            <Text style={styles.textEmail}>Password *</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="password"
              style={styles.input}
              secureTextEntry
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
            <Button color={"#003366"} title="Sign Up" onPress={daftar} />
            <View style={styles.bottomContent}>
              <Text style={styles.noAccount}>Sudah punya akun?</Text>
              <Text
                style={styles.daftars}
                onPress={() => navigation.navigate("Login")}
              >
                Login Disini
              </Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
  formInput: {
    marginBottom: 10,
  },
  textEmail: {
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    paddingBottom: 5,
    paddingTop: 5,
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
