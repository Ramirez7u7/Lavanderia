import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import { useState } from 'react';







export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const logins = async () => {
        try {
            if (!email || !password) {
                Alert.alert("error", "completa todos los datos")
                return
            }
            const response = await fetch(`https://kh0tkmpw-5000.usw3.devtunnels.ms/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, name}),
            });
            const data = await response.json()
            if (response.ok) {
                Alert.alert("Usuario logeado")
                console.log(data)

            } else {
                Alert.alert("Error al enviar may")
            }
        } catch (error) {
            Alert.alert("error en el server")
        }
    }
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
      source={require('../assets/lavadora.png')}
      style={styles.background}
    ></ImageBackground>
      </View>
      <View>
        <Text style={styles.title}>Registrate may!</Text>
        <Text style={styles.label}>Usuario</Text>
        <TextInput style={styles.input} value={name}
                    onChangeText={(text) => setName(text)} />
        <Text style={styles.label}>Correo</Text>
        <TextInput style={styles.input} value={email}
                    onChangeText={(text) => setEmail(text)} />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} value={password}
                    onChangeText={(text) => setPassword(text)} secureTextEntry />
        
        <Pressable style={styles.sends} onPress={logins}>
          <Text style={styles.sendText}>Registrar</Text>
        </Pressable>
      </View>
      <View style={styles.containerFooter}>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    marginTop: 70,
    fontWeight: "bold",
    margin: 15
  },
  recover: {
    backgroundColor: "darkred",
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
    paddingVertical: 10,
    padding: 15
  },
  input: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "gray",
    fontSize: 20,
    paddingHorizontal: 10,
    marginVertical: 15,
    backgroundColor: "white",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerFooter: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 20,
    margin: 5,
  },
  sends: {
    backgroundColor: "green",
    borderRadius: 50,
    marginTop: 75,
    alignItems: "center",
    paddingVertical: 10,
    width:300
  },
  send: {
    backgroundColor: "blue",
    borderRadius: 50,
    marginTop: 75,
    alignItems: "center",
    paddingVertical: 10,
    width:300
  },
});
