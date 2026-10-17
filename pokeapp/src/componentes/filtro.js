import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Filtro({ onTipoChange }) {
  const tipos = [
    "All",
    "normal", "fighting", "flying", "poison", "ground", "rock",
    "bug", "ghost", "steel", "fire", "water", "grass", "electric",
    "psychic", "ice", "dragon", "dark", "fairy",
  ];

  return (
    <View style={styles.filtroContainer}>
      {tipos.map((unTipo) => (
        <TouchableOpacity
          key={unTipo}
          style={styles.button}
          onPress={() => onTipoChange(unTipo)}
        >
          <Text style={styles.buttonText}>{unTipo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  filtroContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 8,
    margin: 4,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
