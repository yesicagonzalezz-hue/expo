import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppProvider } from './src/context/AppContext';
import Informativa from './src/componentes/informativa';
import Capturados from './src/componentes/capturados';
import Favoritos from './src/componentes/favoritos';
import Lista from './src/componentes/lista';
import Usuario from './src/componentes/usuario';
import Pokemon from './src/componentes/pokemon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function FavoritosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function CapturadosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Capturados" component={Capturados} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="ListaTab" component={ListaStack} options={{ title: 'Lista' }} />
          <Tab.Screen name="CapturadosTab" component={CapturadosStack} options={{ title: 'Capturados' }} />
          <Tab.Screen name="FavoritosTab" component={FavoritosStack} options={{ title: 'Favoritos' }} />
          <Tab.Screen name="Informativa" component={Informativa} options={{ headerShown: true }} />
          <Tab.Screen name="Usuario" component={Usuario} options={{ headerShown: true }} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}