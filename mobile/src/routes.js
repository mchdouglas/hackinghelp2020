import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home/index.js';
import CadastroUser from './pages/Cadastros/Usuarios.js';
import InicialScreen from './pages/InicialScreen/index.js';
import Perfil from './pages/Perfil/index.js';
import Conferencia from './pages/Conferencia/index.js';

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroUser" component={CadastroUser} />
        <Stack.Screen name="InicialScreen" component={InicialScreen} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Conferencia" component={Conferencia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
