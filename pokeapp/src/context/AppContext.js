import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const cargarFavoritos = async () => {
      try {
        const datos = await AsyncStorage.getItem('favoritos');
        if (datos) setFavoritos(JSON.parse(datos));
      } catch (error) {
        console.log('Error al cargar favoritos', error);
      }
      setCargado(true);
    };
    cargarFavoritos();
  }, []);

  useEffect(() => {
    if (!cargado) return;
    AsyncStorage.setItem('favoritos', JSON.stringify(favoritos)).catch((error) =>
      console.log('Error al guardar favoritos', error)
    );
  }, [favoritos, cargado]);

  return (
    <AppContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </AppContext.Provider>
  );
}
