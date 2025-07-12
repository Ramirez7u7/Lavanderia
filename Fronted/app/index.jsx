import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';




const VistaCrearOrdenLibre = () => {
  const serviciosEjemplo = [
    { id: 'lavado', nombre: 'Lavado' },
    { id: 'planchado', nombre: 'Planchado' },
    { id: 'secado', nombre: 'Secado' },
    { id: 'tintoreria', nombre: 'Tintorería' },
  ];



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Crear Nueva Orden</Text>



        <Text style={styles.subtitulo}>Prenda</Text>
        <TextInput
          style={styles.input}
        />



<Text style={styles.subtitulo}>Cantidad</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
        />





        <Text style={styles.subtitulo}>Servicios</Text>
        {serviciosEjemplo.map((servicio) => (
          <View key={servicio.id} style={styles.servicioRow}>
            <Text style={styles.servicioNombre}>{servicio.nombre}</Text>
            <Switch value={false} />
          </View>
        ))}
<Text style={styles.subtitulo}>Descripcion</Text>
<TextInput
          style={styles.input}
        />

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.botonTexto}>Crear Orden</Text>
        </TouchableOpacity>
      
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E5E5E5',
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  servicioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  servicioNombre: {
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 8,
    marginTop: 25,
  },
  botonTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VistaCrearOrdenLibre;
