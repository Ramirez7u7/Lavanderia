import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

const VistaServicios = () => {
  const serviciosEjemplo = [
    { id: '1', nombre: 'Lavado'},
    { id: '2', nombre: 'Planchado'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Servicios</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del servicio"
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
        />

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.botonTexto}>Agregar</Text>
        </TouchableOpacity>

        <FlatList
          data={serviciosEjemplo}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={{ flex: 1 }}>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.descripcion}>{item.descripcion}</Text>
              </View>
              <Text style={styles.link}>Editar</Text>
              <Text style={[styles.link, { color: 'red' }]}>Eliminar</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  botonTexto: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
  },
  link: {
    marginLeft: 10,
    color: 'blue',
  },
});

export default VistaServicios;
