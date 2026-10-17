import { StyleSheet, Text, View } from 'react-native';

export default function Usuario() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usuario</Text>
      <Text>Nombre: Yesica González</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
});
