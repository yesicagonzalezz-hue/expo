import { StyleSheet, Text, View } from 'react-native';

export default function Informativa() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acerca de esta app</Text>
      <Text style={styles.texto}>
        Aplicación hecha con React Native y Expo que consume la PokeAPI (pokeapi.co).
      </Text>
      <Text style={styles.texto}>
        Puedes buscar y filtrar Pokémon, ver su detalle y guardar tus favoritos.
      </Text>
      <Text style={styles.firma}>Hecha por: Yesica González</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  texto: { fontSize: 16, marginBottom: 10 },
  firma: { marginTop: 20, fontStyle: 'italic' },
});
