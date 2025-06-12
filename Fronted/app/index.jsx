import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
      source={require('../assets/lavadora.png')}
      style={styles.background}
    ></ImageBackground>
        <Text style={styles.title}>Bienvenido May</Text>
        <Pressable style={styles.send}>
          <Link href="/login" style={styles.textButton}>Iniciar Sesion</Link>
        </Pressable>
        <Pressable style={styles.sends}>
          <Link href="/Register" style={styles.textButton}>Registrarse</Link>
        </Pressable>
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
    backgroundColor: "red",
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